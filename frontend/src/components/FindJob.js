// src/components/FindJob.js
import React from "react";
import CompanyCard from "./CompanyCard";
import "./FindJob.css";

const FindJob = () => {
  const companies = [
    { name: "Brainstation 23", link: "https://brainstation-23.easy.jobs/" },
    { name: "Cefalo", link: "https://career.cefalo.com/" },
    { name: "Therap", link: "https://therap.hire.trakstar.com/" },
    { name: "Optimizely", link: "https://www.optimizely.com/company/career/" },
    { name: "WellDev Bangladesh Ltd.", link: "https://www.welldev.io/careers" },
    { name: "Samsung Research", link: "https://research.samsung.com/careers" },
    { name: "Inverse.Ai", link: "https://inverseai.com/career" },
    { name: "Vivasoft", link: "https://vivasoftltd.com/career/" },
    {
      name: "Enosis",
      link: "https://enosisbd.pinpointhq.com/#js-careers-jobs-block",
    },

    {
      name: "Selise",
      link: "https://selisegroup.com/about-us/#jobs-main-container",
    },
    { name: "Ollyo", link: "https://ollyo.com/careers/" },
    { name: "BracIT", link: "https://www.bracits.com/career" },
    { name: "DivineIT ", link: "https://www.divineit.net/about/careers/" },
    { name: "RiseUp Labs", link: "https://riseuplabs.com/jobs/" },
    {
      name: "Kaz Software",
      link: "https://kaz.com.bd/ourwork2/category/job_post",
    },
    {
      name: "Grameenphone IT",
      link: "https://www.grameenphone.com/about/career/vacant-positions",
    },
    { name: "BJIT", link: "https://bjitgroup.com/career" },
    { name: "Bkash", link: "https://www.bkash.com/career" },
    { name: "AsthaIT", link: "https://www.asthait.com/career/" },
    { name: "Tekarsh", link: "https://tekarsh.com/career/" },
    { name: "Startise", link: "https://startise.com/careers/#opening" },
    { name: "SSL Wireless", link: "https://sslwireless.com/job-openings/" },
    {
      name: "Nexdecade",
      link: "https://www.nexdecade.com/life-at-a-glance/career",
    },
    {
      name: "Musemind",
      link: "https://musemind.agency/career#current-opening",
    },
    { name: "Kolpolok", link: "http://kolpolok.com/career/" },
    {
      name: "Tech Cloud Ltd",
      link: "https://techcloudltd.com/career-at-tech-cloud-ltd/",
    },
    { name: "Relisource", link: "https://www.relisource.com/careers/" },
    { name: "Pridesys IT", link: "https://pridesys.com/careers/" },
    { name: "MediaSoft", link: "https://career.mediasoftbd.com/" },
    { name: "Softeko", link: "https://www.softeko.co/careers/" },
    {
      name: "iFarmer",
      link: "https://ifarmer.asia/career?locale=en#career_opportunity",
    },
    {
      name: "Durbar Technologies",
      link: "https://www.durbartech.com/career/index.php",
    },
    { name: "AppifyLab", link: "https://www.appifylab.com/career/" },
    { name: "Field Nation", link: "https://jobs.lever.co/fieldnation/" },
    { name: "Getlevrg", link: "https://career.getlevrg.com/" },
    { name: "LeadSoft", link: "https://leads.com.bd/current-vacancies/" },
    {
      name: "Ontik Technology",
      link: "https://www.ontiktechnology.com/hire-remote-developers",
    },
    { name: "REVE Systems", link: "https://www.revesoft.com/career" },
    { name: "Dream 71 Bangladesh", link: "https://dream71.com/career" },
    { name: "South Tech", link: "https://career.southtechgroup.com/" },
    { name: "Nascenia", link: "https://nascenia.com/careers/" },
    { name: "Technext", link: "https://technext.it/careers/" },
    { name: "Soft BD Limited", link: "https://softbdltd.com/" },
    { name: "Bdtask Limited", link: "https://www.bdtask.com/career.php" },
    {
      name: "Kona Software Lab Limited",
      link: "https://www.konasl.com/careers#openings",
    },
    {
      name: "Robi RedDot Digital Limited",
      link: "https://robicareer.com/job-portal/jobs/all-jobs",
    },
    { name: "Craftsmen", link: "https://careers.craftsmensoftware.com/jobs" },
    { name: "iXora Solution Ltd.", link: "https://ixorasolution.com/career/" },
    { name: "Flyte Solutions Ltd.", link: "https://flytesolutions.com/career" },
    { name: "TECHNONEXT SOFTWARE LTD.", link: "https://technonext.com/career" },
    { name: "AppsCode", link: "https://appscode.com/contact/" },
    { name: "BDCOM", link: "https://bdcom.cn/career/" },
    { name: "fionetix", link: "https://fionetix.com/" },
  ];

  return (
    <div className="find-job-container">
      {/* Sticky BDJobs button */}
      <div className="bdjobs-btn-container">
        <button
          className="bdjobs-btn"
          onClick={() => window.open("https://www.bdtechjobs.com/", "_blank")}
        >
          View All BD Tech Jobs
        </button>
      </div>

      <h1>Top Software Companies in Bangladesh</h1>

      <div className="company-grid">
        {companies.map((c, idx) => (
          <CompanyCard key={idx} name={c.name} link={c.link} />
        ))}
      </div>
    </div>
  );
};

export default FindJob;
