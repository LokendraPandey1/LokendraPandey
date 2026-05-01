import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/axios';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  const { isAdmin, loading, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate('/admin/login');
    }
  }, [isAdmin, loading, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/portfolio');
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const handleSaveConfig = async () => {
    setSaving(true);
    setMessage('');
    try {
      await api.put('/portfolio/config', {
        personalInfo: data.personalInfo,
        aboutMe: data.aboutMe,
        skills: data.skills
      });
      setMessage('Configuration saved successfully!');
    } catch (err) {
      setMessage('Error saving configuration.');
    } finally {
      setSaving(false);
    }
  };

  if (loading || !isAdmin || !data) return <div className="p-10 text-center">Loading Admin...</div>;

  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <div className="min-h-screen bg-offWhite dark:bg-darkCharcoal pt-24 px-6 md:px-12 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="font-heading text-4xl font-bold">Admin Dashboard</h1>
            <button onClick={logout} className="rounded border border-red-500 px-4 py-2 text-red-500 hover:bg-red-500/10">
              Logout
            </button>
          </div>

          <div className="mb-8 rounded-xl border border-darkCharcoal/10 dark:border-offWhite/10 bg-white dark:bg-black/20 p-6 shadow-sm">
            <h2 className="mb-4 font-heading text-2xl font-semibold">General Configuration</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Full Name</label>
                <input 
                  type="text" 
                  value={data.personalInfo.fullName} 
                  onChange={(e) => setData({...data, personalInfo: {...data.personalInfo, fullName: e.target.value}})}
                  className="rounded border border-darkCharcoal/20 dark:border-offWhite/20 bg-transparent p-2 focus:border-electricIndigo outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Job Title</label>
                <input 
                  type="text" 
                  value={data.personalInfo.jobTitle} 
                  onChange={(e) => setData({...data, personalInfo: {...data.personalInfo, jobTitle: e.target.value}})}
                  className="rounded border border-darkCharcoal/20 dark:border-offWhite/20 bg-transparent p-2 focus:border-electricIndigo outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-medium">Tagline</label>
                <input 
                  type="text" 
                  value={data.personalInfo.tagline} 
                  onChange={(e) => setData({...data, personalInfo: {...data.personalInfo, tagline: e.target.value}})}
                  className="rounded border border-darkCharcoal/20 dark:border-offWhite/20 bg-transparent p-2 focus:border-electricIndigo outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-medium">Short Bio</label>
                <textarea 
                  value={data.aboutMe.shortBio} 
                  onChange={(e) => setData({...data, aboutMe: {...data.aboutMe, shortBio: e.target.value}})}
                  className="rounded border border-darkCharcoal/20 dark:border-offWhite/20 bg-transparent p-2 focus:border-electricIndigo outline-none w-full h-24 resize-none"
                />
              </div>
            </div>

            <button 
              onClick={handleSaveConfig}
              disabled={saving}
              className="rounded bg-electricIndigo px-6 py-2 font-medium text-white hover:bg-electricIndigo/90"
            >
              {saving ? 'Saving...' : 'Save Configuration'}
            </button>
            {message && <span className="ml-4 text-sm font-medium">{message}</span>}
          </div>

          <div className="rounded-xl border border-darkCharcoal/10 dark:border-offWhite/10 bg-white dark:bg-black/20 p-6 shadow-sm">
            <h2 className="mb-4 font-heading text-2xl font-semibold">Advanced CMS View</h2>
            <p className="mb-4 text-sm text-darkCharcoal/60 dark:text-offWhite/60">
              For complete editing of Projects, Experience, Education, and Assignments, you can modify the raw JSON data below.
              In a full production build, this would be expanded into dedicated CRUD tables.
            </p>
            <textarea
              readOnly
              value={JSON.stringify(data, null, 2)}
              className="w-full h-96 rounded border border-darkCharcoal/20 dark:border-offWhite/20 bg-darkCharcoal text-green-400 p-4 font-mono text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;


