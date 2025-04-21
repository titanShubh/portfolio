
const Companies = () => {
  const companies = [
    { name: "ClickUp", logo: "https://assets-global.website-files.com/5d9bc5d562ffc2869b470941/5e7a588fb8d7db5b8edfd798_clickup-logo-dark.svg" },
    { name: "Dropbox", logo: "https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/db-logo-warp.svg" },
    { name: "Paychex", logo: "https://www.paychex.com/content/dam/paychex/web-design/logo.svg" },
    { name: "Elastic", logo: "https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt280217a63b82a734/6321135933eedf7f5e56fc88/elastic-logo.svg" },
    { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  ];

  return (
    <div className="py-12 px-4 md:px-8">
      <p className="text-gray-400 mb-8">Worked with</p>
      <div className="flex flex-wrap gap-12 justify-between">
        {companies.map((company) => (
          <div key={company.name} className="grayscale opacity-70 hover:opacity-100 transition-opacity">
            <img src={company.logo} alt={company.name} className="h-8 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
