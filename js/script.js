(function () {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  const modal = document.querySelector("[data-modal]");
  const closeModalButton = document.querySelector("[data-close-modal]");
  const brandGrid = document.querySelector("[data-brand-grid]");
  const logoToggle = document.querySelector("[data-logo-toggle]");

  const brands = [
  {
    name: "21 fitness",
    category: "retail",
    type: "Retail",
    logo: "image/21-fitness-logo.png",
    status: "Available",
    roi: "6.12%*",
    lease: "10 Yr",
    monthly: "₹25,000",
    description: "Fitness retail tenant suited for high-street commercial and lifestyle-focused retail destinations.",
    start: "₹49 Lakhs",
    border: ""
  },
  {
    name: "Blaast",
    category: "retail",
    type: "Retail",
    logo: "image/blaast-logo.png",
    status: "Available",
    roi: "6.21%*",
    lease: "12 Yr",
    monthly: "₹30,000",
    description: "Retail brand opportunity positioned for compact commercial spaces with steady rental income potential.",
    start: "₹58 Lakhs",
    border: ""
  },
  {
    name: "Lulu",
    category: "retail",
    type: "Retail",
    logo: "image/lulu-logo.png",
    status: "Available",
    roi: "6.32%*",
    lease: "10 Yr",
    monthly: "₹50,000",
    description: "Recognized retail tenant supporting strong consumer footfall and long-term commercial visibility.",
    start: "₹95 Lakhs",
    border: ""
  },
  {
    name: "Jus jumpin",
    category: "gaming",
    type: "Gaming & Entertainment",
    logo: "image/jus-jumpin-logo.png",
    status: "High Demand",
    roi: "6.70%*",
    lease: "10 Yr",
    monthly: "₹90,000",
    description: "Family entertainment and activity-based tenant suited for destination retail and weekend footfall.",
    start: "₹1.95 Cr",
    border: "hot"
  },
  {
    name: "Manyavar",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/manyavar-logo.png",
    status: "Available",
    roi: "6.22%*",
    lease: "15 Yr",
    monthly: "₹70,000",
    description: "Ethnic fashion retail tenant with premium brand recall and strong occasion-led customer demand.",
    start: "₹1.35 Cr",
    border: ""
  },
  {
    name: "Looks salon",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/looks-salon-logo.png",
    status: "Available",
    roi: "6.25%*",
    lease: "10 Yr",
    monthly: "₹1,00,000",
    description: "Premium salon tenant suited for lifestyle-led commercial locations with repeat customer demand.",
    start: "₹1.92 Cr",
    border: ""
  },
  {
    name: "Westside",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/westside-logo.png",
    status: "Anchor Tenant",
    roi: "6.35%*",
    lease: "12 Yr",
    monthly: "₹1,50,000",
    description: "Fashion and lifestyle anchor brand supporting consistent retail visibility and destination value.",
    start: "₹3 Cr",
    border: ""
  },
  {
    name: "Tanishq",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/tanishq-logo.png",
    status: "Pre-Leased",
    roi: "6.55%*",
    lease: "15 Yr",
    monthly: "₹1,50,000",
    description: "Premium jewellery tenant with strong trust value, high-ticket customer profile and brand-led footfall.",
    start: "₹3 Cr",
    border: ""
  },
  {
    name: "Joyalukkas",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/joyalukkas-logo.png",
    status: "Pre-Leased",
    roi: "6.4%*",
    lease: "15 Yr",
    monthly: "₹1,60,000",
    description: "Established jewellery brand suited for premium retail corridors and high-value commercial investments.",
    start: "₹3 Cr",
    border: ""
  },
  {
    name: "Arte salon",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/arte-salon-logo.png",
    status: "Available",
    roi: "6.15%*",
    lease: "12 Yr",
    monthly: "₹1,50,000",
    description: "Luxury salon tenant positioned for premium retail locations with lifestyle-focused customer demand.",
    start: "₹3.75 Cr",
    border: ""
  },
  {
    name: "The collective",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/the-collective-logo.png",
    status: "Select Units",
    roi: "6.20%*",
    lease: "10 Yr",
    monthly: "₹1,50,000",
    description: "Luxury fashion retail concept supporting premium positioning and high-end commercial brand value.",
    start: "₹3.75 Cr",
    border: ""
  },
  {
    name: "Gegaeats",
    category: "food",
    type: "Food & Beverage",
    logo: "image/gigaeats-logo.png",
    status: "Available",
    roi: "6.08%*",
    lease: "10 Yr",
    monthly: "₹1,90,000",
    description: "Food-service tenant with strong consumption-led demand and recurring customer footfall potential.",
    start: "₹3.75 Cr",
    border: "hot"
  },
  {
    name: "Sneakerz",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/sneakerz-logo.png",
    status: "Available",
    roi: "6.30%*",
    lease: "12 Yr",
    monthly: "₹2,25,000",
    description: "Footwear and fashion-led tenant suited for youth-focused retail and premium shopping destinations.",
    start: "₹5.25 Cr",
    border: ""
  },
  {
    name: "Clovia",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/clovia-logo.png",
    status: "Available",
    roi: "6.18%*",
    lease: "10 Yr",
    monthly: "₹2,25,000",
    description: "Lifestyle retail tenant with brand recall and strong category relevance in urban retail markets.",
    start: "₹5.30 Cr",
    border: ""
  },
  {
    name: "Mini klub",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/miniklub-logo.png",
    status: "Available",
    roi: "6.28%*",
    lease: "12 Yr",
    monthly: "₹3,00,000",
    description: "Kidswear and family-focused retail brand suited for premium family-oriented commercial destinations.",
    start: "₹7 Cr",
    border: ""
  },
  {
    name: "Giva",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/giva-logo.png",
    status: "Pre-Leased",
    roi: "6.45%*",
    lease: "10 Yr",
    monthly: "₹4,00,000",
    description: "Modern jewellery retail tenant with strong urban appeal and premium high-street positioning.",
    start: "₹10.50 Cr",
    border: ""
  },
  {
    name: "Png jewellers",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/png-jewellers-logo.png",
    status: "Pre-Leased",
    roi: "6.50%*",
    lease: "12 Yr",
    monthly: "₹4,50,000",
    description: "Established jewellery tenant supporting premium commercial value and high-ticket retail demand.",
    start: "₹10.50 Cr",
    border: ""
  },
  {
    name: "Right gold",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/right-gold-logo.png",
    status: "Pre-Leased",
    roi: "6.65%*",
    lease: "10 Yr",
    monthly: "₹4,80,000",
    description: "Gold jewellery tenant positioned for premium commercial spaces with strong rental income potential.",
    start: "₹10.50 Cr",
    border: ""
  },
  {
    name: "Bluestone",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/bluestone-logo.png",
    status: "Pre-Leased",
    roi: "6.25%*",
    lease: "12 Yr",
    monthly: "₹4,00,000",
    description: "Contemporary jewellery brand suited for modern retail corridors and premium shopping environments.",
    start: "₹11 Cr",
    border: ""
  },
  {
    name: "Ethera",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/ethera-logo.png",
    status: "Pre-Leased",
    roi: "6.20%*",
    lease: "10 Yr",
    monthly: "₹4,00,000",
    description: "Premium jewellery tenant opportunity positioned for high-value commercial investment formats.",
    start: "₹11 Cr",
    border: ""
  },
  {
    name: "Manuvel jewellers",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/manuvel-malabar-logo.png",
    status: "Pre-Leased",
    roi: "6.75%*",
    lease: "12 Yr",
    monthly: "₹8,00,000",
    description: "Large jewellery tenant opportunity with strong rental value and premium retail positioning.",
    start: "₹16 Cr",
    border: ""
  },
  {
    name: "Speadeal",
    category: "office",
    type: "Office",
    logo: "image/snapdeal-logo.png",
    status: "Available",
    roi: "6.46%*",
    lease: "9 Yr",
    monthly: "₹35,000",
    description: "Office tenant opportunity suited for business park formats with steady rental income potential.",
    start: "₹65 Lakhs",
    border: ""
  },
  {
    name: "Statusneo",
    category: "office",
    type: "Office",
    logo: "image/statusneo-logo.png",
    status: "Available",
    roi: "6.4%*",
    lease: "15 Yr",
    monthly: "₹40,000",
    description: "Technology office tenant suited for modern commercial spaces and professional business environments.",
    start: "₹75 Lakhs",
    border: ""
  },
  {
    name: "Vivo",
    category: "office",
    type: "Office",
    logo: "image/vivo-logo.png",
    status: "Available",
    roi: "6.4%*",
    lease: "15 Yr",
    monthly: "₹40,000",
    description: "Recognized corporate tenant supporting brand-led commercial credibility and rental stability.",
    start: "₹75 Lakhs",
    border: ""
  },
  {
    name: "Salescode",
    category: "office",
    type: "Office",
    logo: "image/salescode-logo.png",
    status: "Available",
    roi: "6.10%*",
    lease: "10 Yr",
    monthly: "₹35,000",
    description: "Business office tenant suited for compact commercial units with stable income positioning.",
    start: "₹70 Lakhs",
    border: ""
  },
  {
    name: "Incuspaze",
    category: "office",
    type: "Office",
    logo: "image/incuspaze-logo.png",
    status: "Available",
    roi: "6.30%*",
    lease: "12 Yr",
    monthly: "₹80,000",
    description: "Managed workspace tenant supporting office demand, business occupancy and recurring rental potential.",
    start: "₹1.60 Cr",
    border: ""
  },
  {
    name: "Knowledge centre",
    category: "office",
    type: "Office",
    logo: "image/knowledge-centre-logo.png",
    status: "Available",
    roi: "6.05%*",
    lease: "9 Yr",
    monthly: "₹36,000",
    description: "Education and knowledge-focused office tenant suited for professional commercial environments.",
    start: "₹72 Lakhs",
    border: ""
  }
];

  const roiProfiles = {
    gaming: { rentFactor: 0.067 },
    food: { rentFactor: 0.062 },
    retail: { rentFactor: 0.063 },
    jewellery: { rentFactor: 0.065 },
    lifestyle: { rentFactor: 0.062 },
    office: { rentFactor: 0.063 }
  };

  const compactModalLogoBrands = new Set(["21 fitness", "Lulu", "Giva", "Vivo"]);
  const roiOptions = [
    { value: "retail", label: "Retail Shop - 6.3% p.a." },
    { value: "jewellery", label: "Jewellery Tenant - 6.5% p.a." },
    { value: "lifestyle", label: "Lifestyle Store - 6.2% p.a." },
    { value: "food", label: "Food & Beverage - 6.2% p.a." },
    { value: "gaming", label: "Gaming & Entertainment - 6.7% p.a." },
    { value: "office", label: "Office Space - 6.3% p.a." }
  ];
  let currentRoiSnapshot = null;

  function formatIndianNumber(value) {
    return Math.round(value).toLocaleString("en-IN");
  }

  function formatLakhCrore(lakhs, decimals = 2) {
    if (lakhs >= 100) {
      return `₹${(lakhs / 100).toFixed(decimals).replace(/\.00$/, "")} Cr`;
    }
    return `₹${lakhs.toFixed(1).replace(/\.0$/, "")} L`;
  }

  function getBrandCategoryLabel(category) {
    if (category === "food") return "Food & Beverage";
    if (category === "gaming") return "Gaming & Entertainment";
    if (category === "retail") return "Retail";
    if (category === "jewellery") return "Jewellery";
    if (category === "office") return "Office Space";
    return "Lifestyle";
  }

  function populateRoiOptions() {
    const brandSelect = document.querySelector("[data-roi-brand]");
    if (!brandSelect) return;

    brandSelect.innerHTML = roiOptions
      .map((option) => `<option value="${option.value}">${option.label}</option>`)
      .join("");
  }

  function setHeaderState() {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  function closeMenu() {
    menu?.classList.remove("is-open");
    menuToggle?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  function resetModalForm() {
    const form = modal?.querySelector("[data-lead-form]");
    if (!form) return;

    form.reset();
    form.querySelectorAll(".field.is-error").forEach((field) => field.classList.remove("is-error"));
    form.querySelectorAll(".field small").forEach((message) => {
      message.textContent = "";
    });
    form.querySelectorAll(".check-error, .form-status").forEach((message) => {
      message.textContent = "";
    });
  }

  function openModal(brand, trigger) {
    if (!modal) return;
    resetModalForm();
    const isRoiModal = trigger?.hasAttribute("data-roi-modal");
    const isOfferModal = trigger?.hasAttribute("data-offer-modal");
    const roiSnapshot = isRoiModal ? (currentRoiSnapshot || updateRoi()) : null;
    const selectedBrand = brand || brands.find((item) => item.name === "SkyJumper") || brands[0];
    const customTitle = trigger?.getAttribute("data-modal-title");
    const offerDetails = isOfferModal ? {
      title: trigger.getAttribute("data-offer-title") || "Pre Rented Commercial Unit",
      subtitle: trigger.getAttribute("data-offer-subtitle") || "Selected commercial investment package.",
      price: trigger.getAttribute("data-offer-price") || "",
      priceLabel: trigger.getAttribute("data-offer-price-label") || "Starts From",
      tenure: trigger.getAttribute("data-offer-tenure") || "",
      tenureLabel: trigger.getAttribute("data-offer-tenure-label") || "Lease Term",
      benefit: trigger.getAttribute("data-offer-benefit") || "",
      benefitLabel: trigger.getAttribute("data-offer-benefit-label") || "Benefit"
    } : null;
    const shouldShowLogo = Boolean(brand) && !isRoiModal && !isOfferModal;
    const logoWrap = modal.querySelector("[data-modal-logo]");
    const logo = modal.querySelector("[data-modal-logo] img");
    const title = modal.querySelector("#modal-title");
    const subtitle = modal.querySelector("[data-modal-subtitle]");
    const roi = modal.querySelector("[data-modal-roi]");
    const lease = modal.querySelector("[data-modal-lease]");
    const min = modal.querySelector("[data-modal-min]");
    const roiLabel = modal.querySelector("[data-modal-roi-label]");
    const leaseLabel = modal.querySelector("[data-modal-lease-label]");
    const minLabel = modal.querySelector("[data-modal-min-label]");

    function setLeadValue(selector, value) {
      const field = modal.querySelector(selector);
      if (field) field.value = value || "";
    }

    if (logoWrap) {
      logoWrap.hidden = !shouldShowLogo;
      logoWrap.setAttribute("aria-hidden", String(!shouldShowLogo));
      logoWrap.classList.toggle("is-compact-logo", Boolean(brand && compactModalLogoBrands.has(brand.name)));
    }

    if (logo && shouldShowLogo) {
      logo.src = selectedBrand.logo;
      logo.alt = `${selectedBrand.name} logo`;
    }

    if (roiSnapshot) {
      if (title) title.textContent = "Lock Your Projected Returns";
      if (subtitle) {
        subtitle.innerHTML = `${roiSnapshot.propertyType}. Investment <strong>${roiSnapshot.investmentAmount}</strong> for <strong>${roiSnapshot.tenure}</strong>.`;
      }
      if (roi) roi.textContent = roiSnapshot.totalValue;
      if (lease) lease.textContent = roiSnapshot.monthlyRent;
      if (min) min.textContent = roiSnapshot.effectiveRoi;
      if (roiLabel) roiLabel.textContent = "End Value";
      if (leaseLabel) leaseLabel.textContent = "Monthly Rent";
      if (minLabel) minLabel.textContent = "Effective ROI";

      setLeadValue("[data-lead-property]", roiSnapshot.propertyType);
      setLeadValue("[data-lead-investment]", roiSnapshot.investmentAmount);
      setLeadValue("[data-lead-tenure]", roiSnapshot.tenure);
      setLeadValue("[data-lead-monthly-rent]", roiSnapshot.monthlyRent);
      setLeadValue("[data-lead-total-rental]", roiSnapshot.totalRentalIncome);
      setLeadValue("[data-lead-appreciation]", roiSnapshot.capitalAppreciation);
      setLeadValue("[data-lead-total-value]", roiSnapshot.totalValue);
      setLeadValue("[data-lead-effective-roi]", roiSnapshot.effectiveRoi);
      setLeadValue("[data-lead-escalation]", roiSnapshot.rentalEscalation);
      setLeadValue("[data-lead-appreciation-rate]", roiSnapshot.capitalAppreciationRate);
    } else if (offerDetails) {
      if (title) title.textContent = offerDetails.title;
      if (subtitle) subtitle.textContent = offerDetails.subtitle;
      if (roi) roi.textContent = offerDetails.price;
      if (lease) lease.textContent = offerDetails.tenure;
      if (min) min.textContent = offerDetails.benefit;
      if (roiLabel) roiLabel.textContent = offerDetails.priceLabel;
      if (leaseLabel) leaseLabel.textContent = offerDetails.tenureLabel;
      if (minLabel) minLabel.textContent = offerDetails.benefitLabel;

      setLeadValue("[data-lead-property]", offerDetails.title);
      setLeadValue("[data-lead-investment]", offerDetails.price);
      setLeadValue("[data-lead-tenure]", offerDetails.tenure);
      setLeadValue("[data-lead-monthly-rent]", `${offerDetails.benefitLabel}: ${offerDetails.benefit}`);
      setLeadValue("[data-lead-total-rental]", "");
      setLeadValue("[data-lead-appreciation]", "");
      setLeadValue("[data-lead-total-value]", offerDetails.price);
      setLeadValue("[data-lead-effective-roi]", `${offerDetails.benefitLabel}: ${offerDetails.benefit}`);
      setLeadValue("[data-lead-escalation]", "");
      setLeadValue("[data-lead-appreciation-rate]", "");
    } else {
      if (title) title.textContent = customTitle || `Invest in ${selectedBrand.name}`;
      if (subtitle) subtitle.innerHTML = "Pre-leased commercial unit. Our advisor calls within <strong>2 hours</strong>.";
      if (roi) roi.textContent = selectedBrand.roi;
      if (lease) lease.textContent = selectedBrand.lease;
      if (min) min.textContent = selectedBrand.start;
      if (roiLabel) roiLabel.textContent = "Annual ROI";
      if (leaseLabel) leaseLabel.textContent = "Lease Term";
      if (minLabel) minLabel.textContent = "Min. Invest";

      setLeadValue("[data-lead-property]", selectedBrand.name);
      setLeadValue("[data-lead-investment]", selectedBrand.start);
      setLeadValue("[data-lead-tenure]", selectedBrand.lease);
      setLeadValue("[data-lead-monthly-rent]", selectedBrand.monthly);
      setLeadValue("[data-lead-total-rental]", "");
      setLeadValue("[data-lead-appreciation]", "");
      setLeadValue("[data-lead-total-value]", "");
      setLeadValue("[data-lead-effective-roi]", selectedBrand.roi);
      setLeadValue("[data-lead-escalation]", "");
      setLeadValue("[data-lead-appreciation-rate]", "");
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
    setTimeout(() => modal.querySelector("input")?.focus(), 50);
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  function renderBrands(filter = "all") {
    if (!brandGrid) return;

    const visibleBrands = (filter === "all" ? brands : brands.filter((brand) => brand.category === filter))
      .slice()
      .sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi));

    brandGrid.innerHTML = visibleBrands.map((brand) => `
      <article class="brand-card ${brand.border}" data-brand-index="${brands.indexOf(brand)}">
        <div class="brand-card-top">
          <span class="brand-status">${brand.status}</span>
          <div class="brand-id">
            <div class="brand-logo-media">
              <img src="${brand.logo}" alt="${brand.name} logo" loading="lazy">
            </div>
            <div class="brand-title">
              <h3>${brand.name}</h3>
              <span>${getBrandCategoryLabel(brand.category)}</span>
            </div>
          </div>
          <div class="brand-stats">
            <div><strong class="green-stat">${brand.roi}</strong><span>Annual ROI</span></div>
            <div><strong>${brand.lease}</strong><span>Lease</span></div>
            <div><strong>${brand.monthly}</strong><span>Monthly</span></div>
          </div>
          <p>${brand.description}</p>
        </div>
        <div class="brand-card-bottom">
          <div class="invest-start">Investment Start: <strong>${brand.start}</strong></div>
          <button class="btn btn-blue" type="button" data-open-modal data-brand-index="${brands.indexOf(brand)}">Invest Now →</button>
        </div>
      </article>
    `).join("");
  }

  function updateRoi() {
    const brandSelect = document.querySelector("[data-roi-brand]");
    const tenureSelect = document.querySelector("[data-tenure]");
    const escalationSelect = document.querySelector("[data-escalation]");
    const appreciationSelect = document.querySelector("[data-appreciation]");
    const brandKey = brandSelect?.value || "gaming";
    const investmentLakhs = Number(document.querySelector("[data-investment-range]")?.value || 100);
    const years = Number(tenureSelect?.value || 10);
    const escalation = Number(escalationSelect?.value || 5) / 100;
    const appreciationRate = Number(appreciationSelect?.value || 8) / 100;
    const profile = roiProfiles[brandKey] || roiProfiles.gaming;

    const yearlyRentYearOneLakhs = investmentLakhs * profile.rentFactor;
    let totalRentLakhs = 0;

    for (let year = 0; year < years; year += 1) {
      totalRentLakhs += yearlyRentYearOneLakhs * Math.pow(1 + escalation, year);
    }

    const appreciatedValueLakhs = investmentLakhs * Math.pow(1 + appreciationRate, years);
    const capitalGainLakhs = appreciatedValueLakhs - investmentLakhs;
    const totalValueLakhs = investmentLakhs + totalRentLakhs + capitalGainLakhs;
    const totalRoi = ((totalValueLakhs - investmentLakhs) / investmentLakhs) * 100;
    const monthlyRentRupees = (yearlyRentYearOneLakhs * 100000) / 12;

    const investmentLabel = investmentLakhs >= 100
      ? `₹${(investmentLakhs / 100).toFixed(2).replace(/\.00$/, "")} Crore`
      : `₹${investmentLakhs} Lakhs`;

    const investmentShort = investmentLakhs >= 100
      ? `₹${(investmentLakhs / 100).toFixed(2)} Cr`
      : `₹${investmentLakhs} L`;

    const totalValueText = formatLakhCrore(totalValueLakhs, 2);
    const monthlyRentText = `₹${formatIndianNumber(monthlyRentRupees)} / mo`;
    const totalRentalText = formatLakhCrore(totalRentLakhs, 1);
    const capitalAppreciationText = formatLakhCrore(capitalGainLakhs, 2);
    const effectiveRoiText = `${Math.round(totalRoi)}%`;

    document.querySelector("[data-investment-display]").textContent = investmentLabel;
    document.querySelector("[data-total-value]").textContent = totalValueText;
    document.querySelector("[data-return-investment]").textContent = investmentShort;
    document.querySelector("[data-return-rent]").textContent = monthlyRentText;
    document.querySelector("[data-return-rental]").textContent = totalRentalText;
    document.querySelector("[data-return-appreciation]").textContent = capitalAppreciationText;
    document.querySelector("[data-return-roi]").textContent = effectiveRoiText;

    currentRoiSnapshot = {
      propertyType: brandSelect?.selectedOptions?.[0]?.textContent.trim() || "Selected property",
      investmentAmount: investmentShort,
      investmentLabel,
      tenure: tenureSelect?.selectedOptions?.[0]?.textContent.trim() || `${years} Years`,
      monthlyRent: monthlyRentText,
      totalRentalIncome: totalRentalText,
      capitalAppreciation: capitalAppreciationText,
      totalValue: totalValueText,
      effectiveRoi: effectiveRoiText,
      rentalEscalation: escalationSelect?.selectedOptions?.[0]?.textContent.trim() || `${Math.round(escalation * 100)}% per year`,
      capitalAppreciationRate: appreciationSelect?.selectedOptions?.[0]?.textContent.trim() || `${Math.round(appreciationRate * 100)}% per year`
    };

    return currentRoiSnapshot;
  }

  function validateLeadForm(form) {
    const name = form.elements.name;
    const mobile = form.elements.mobile;
    const email = form.elements.email;
    const consent = form.elements.consent;
    const status = form.querySelector(".form-status");
    const checkError = form.querySelector(".check-error");
    let valid = true;

    function setFieldError(field, message) {
      if (!field) return;
      const wrap = field.closest(".field");
      const messageNode = wrap?.querySelector("small");
      wrap?.classList.toggle("is-error", Boolean(message));
      if (messageNode) messageNode.textContent = message;
    }

    if (!name || name.value.trim().length < 2) {
      setFieldError(name, "Please enter your full name.");
      valid = false;
    } else {
      setFieldError(name, "");
    }

    if (!mobile || !/^[6-9]\d{9}$/.test(mobile.value.trim())) {
      setFieldError(mobile, "Enter a valid 10-digit Indian mobile number.");
      valid = false;
    } else {
      setFieldError(mobile, "");
    }

    if (email) {
      const emailValue = email.value.trim();
      if (emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        setFieldError(email, "Please enter a valid email address.");
        valid = false;
      } else {
        setFieldError(email, "");
      }
    }

    if (!consent || !consent.checked) {
      if (checkError) checkError.textContent = "Please authorize contact before submitting.";
      valid = false;
    } else if (checkError) {
      checkError.textContent = "";
    }

    if (!valid) {
      if (status) status.textContent = "";
      return false;
    }

    if (status) status.textContent = "Sending your enquiry...";
    return true;
  }

  function setThankYouRedirects() {
    const thankYouUrl = new URL("thank-you/", window.location.href).href;
    document.querySelectorAll("[data-thank-you-url]").forEach((field) => {
      field.value = thankYouUrl;
    });
  }

  function startCountdown() {
    const countdown = document.querySelector("[data-countdown]");
    if (!countdown) return;

    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7);
    deadline.setHours(23, 59, 59, 999);

    function updateCountdown() {
      const remaining = Math.max(0, deadline.getTime() - Date.now());
      const seconds = Math.floor(remaining / 1000);
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      document.querySelector("[data-days]").textContent = String(days).padStart(2, "0");
      document.querySelector("[data-hours]").textContent = String(hours).padStart(2, "0");
      document.querySelector("[data-minutes]").textContent = String(minutes).padStart(2, "0");
      document.querySelector("[data-seconds]").textContent = String(secs).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  function initRevealAnimations() {
    const revealItems = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => observer.observe(item));
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = menu?.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", Boolean(isOpen));
    menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
    document.body.classList.toggle("menu-open", Boolean(isOpen));
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const modalTrigger = target.closest("[data-open-modal]");
    if (modalTrigger) {
      event.preventDefault();
      closeMenu();
      const brandIndex = Number(modalTrigger.getAttribute("data-brand-index") || modalTrigger.closest("[data-brand-index]")?.getAttribute("data-brand-index"));
      openModal(Number.isInteger(brandIndex) ? brands[brandIndex] : undefined, modalTrigger);
    }

    const brandCard = target.closest(".brand-card[data-brand-index]");
    if (brandCard && !target.closest("button, a")) {
      const brandIndex = Number(brandCard.getAttribute("data-brand-index"));
      openModal(Number.isInteger(brandIndex) ? brands[brandIndex] : undefined);
    }

    if (target.matches("[data-filter]")) {
      document.querySelectorAll("[data-filter]").forEach((button) => button.classList.remove("active"));
      target.classList.add("active");
      renderBrands(target.getAttribute("data-filter") || "all");
    }

    if (target.matches('a[href^="#"]')) {
      const href = target.getAttribute("href");
      if (!href || href === "#") return;
      const section = document.querySelector(href);
      if (!section) return;
      event.preventDefault();
      closeMenu();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  closeModalButton?.addEventListener("click", closeModal);

  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeModal();
    }
  });

  document.querySelectorAll("[data-lead-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!validateLeadForm(form)) {
        event.preventDefault();
      }
    });
  });

  document.querySelectorAll("[data-roi-brand], [data-investment-range], [data-tenure], [data-escalation], [data-appreciation]").forEach((input) => {
    input.addEventListener("input", updateRoi);
    input.addEventListener("change", updateRoi);
  });

  logoToggle?.addEventListener("change", () => {
    brandGrid?.classList.toggle("hide-logos", !logoToggle.checked);
  });

  window.addEventListener("scroll", setHeaderState, { passive: true });

  renderBrands();
  updateRoi();
  setThankYouRedirects();
  startCountdown();
  setHeaderState();
  initRevealAnimations();
})();
