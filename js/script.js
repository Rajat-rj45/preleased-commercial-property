(function () {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  const modal = document.querySelector("[data-modal]");
  const closeModalButton = document.querySelector("[data-close-modal]");
  const brandGrid = document.querySelector("[data-brand-grid]");
  const logoToggle = document.querySelector("[data-logo-toggle]");
  const costSort = document.querySelector("[data-sort-cost]");
  const rentalSort = document.querySelector("[data-sort-rental]");
  let activeFilter = "all";

  const brands = [
  {
    name: "HDFC Bank",
    category: "bank",
    type: "Banking",
    logo: "assets/images/logo/hdfc-bank-logo.png",
    status: "Sold Out",
    roi: "4.0%*",
    lease: "9 Yr",
    description: "India's leading private bank with strong lease security and long-term rental stability.",
    start: "₹6 Cr",
    border: "sold-out",
    soldOut: true,
    soldOutStamp: "image/sold-out-stamp.png"
  },
  {
    name: "McDonald",
    category: "food",
    type: "Food & Beverage",
    logo: "assets/images/logo/mcdonalds-logo.png",
    status: "Sold Out",
    roi: "5.0%*",
    lease: "10 Yr",
    description: "World's largest QSR brand.",
    start: "₹10.5 Cr",
    border: "sold-out",
    soldOut: true,
    soldOutStamp: "image/sold-out-stamp.png"
  },
  {
    name: "United Colors of Benetton",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/united-colors-benetton-logo.png",
    status: "Select Units",
    roi: "5.0%*",
    lease: "9 Yr",
    description: "Premium fashion retail tenant with strong lifestyle positioning and dependable high-street customer pull.",
    start: "₹3 Cr",
    border: ""
  },
  {
    name: "Croma",
    category: "retail",
    type: "Retail",
    logo: "image/croma-logo.png",
    status: "Anchor Tenant",
    roi: "5.50%*",
    lease: "9 Yr",
    description: "Large-format electronics retail tenant suited for destination shopping corridors and repeat customer demand.",
    start: "₹6 Cr",
    border: "blue-border"
  },
  {
    name: "Miniso",
    category: "retail",
    type: "Retail",
    logo: "image/miniso-logo.png",
    status: "Pre-Leased",
    roi: "6.0%*",
    lease: "10 Yr",
    description: "Compact lifestyle and value retail brand with strong youth appeal, impulse buying and steady mall footfall.",
    start: "₹5.5 Cr",
    border: ""
  },
  {
    name: "Canara Bank",
    category: "bank",
    type: "Banking",
    logo: "image/canara-bank-logo.png",
    status: "Sold Out",
    roi: "4.25%*",
    lease: "9 Yr",
    description: "Public sector banking tenant with reliable occupancy profile and strong long-term branch stability.",
    start: "₹8 Cr",
    border: "sold-out",
    soldOut: true,
    soldOutStamp: "image/sold-out-stamp.png"
  },
  {
    name: "21 FITNESS",
    category: "retail",
    type: "Retail",
    logo: "image/21-fitness-logo.png",
    status: "Available",
    roi: "6.50%*",
    lease: "10 Yr",
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
    description: "Retail brand opportunity positioned for compact commercial spaces with steady rental income potential.",
    start: "₹58 Lakhs",
    border: ""
  },
  {
    name: "LuLu",
    category: "retail",
    type: "Retail",
    logo: "image/lulu-logo.png",
    status: "Available",
    roi: "6.32%*",
    lease: "10 Yr",
    description: "Recognized retail tenant supporting strong consumer footfall and long-term commercial visibility.",
    start: "₹95 Lakhs",
    border: ""
  },
  {
    name: "Jus Jumpin",
    category: "gaming",
    type: "Gaming & Entertainment",
    logo: "image/jus-jumpin-logo.png",
    status: "High Demand",
    roi: "6.70%*",
    lease: "10 Yr",
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
    roi: "7.0%*",
    lease: "19 Yr",
    description: "Ethnic fashion retail tenant with premium brand recall and strong occasion-led customer demand.",
    start: "₹1.35 Cr",
    border: ""
  },
  {
    name: "Looks Salon",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/looks-salon-logo.png",
    status: "Sold Out",
    roi: "6.50%*",
    lease: "10 Yr",
    description: "Premium salon tenant suited for lifestyle-led commercial locations with repeat customer demand.",
    start: "₹1.92 Cr",
    border: "sold-out",
    soldOut: true,
    soldOutStamp: "image/sold-out-stamp.png"
  },
  {
    name: "Westside",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/westside-logo.png",
    status: "Anchor Tenant",
    roi: "6.0%*",
    lease: "12 Yr",
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
    roi: "7.0%*",
    lease: "15 Yr",
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
    roi: "6.0%*",
    lease: "15 Yr",
    description: "Established jewellery brand suited for premium retail corridors and high-value commercial investments.",
    start: "₹3 Cr",
    border: ""
  },
  {
    name: "Arte Salon",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/arte-salon-logo.png",
    status: "Available",
    roi: "6.50%*",
    lease: "12 Yr",
    description: "Luxury salon tenant positioned for premium retail locations with lifestyle-focused customer demand.",
    start: "₹3.75 Cr",
    border: ""
  },
  {
    name: "The Collective",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/the-collective-logo.png",
    status: "Sold Out",
    roi: "7.0%*",
    lease: "10 Yr",
    description: "Luxury fashion retail concept supporting premium positioning and high-end commercial brand value.",
    start: "₹3.75 Cr",
    border: "sold-out",
    soldOut: true,
    soldOutStamp: "image/sold-out-stamp.png"
  },
  {
    name: "Gegaeats",
    category: "food",
    type: "Food & Beverage",
    logo: "image/gigaeats-logo.png",
    status: "Available",
    roi: "6.50%*",
    lease: "10 Yr",
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
    roi: "6.50%*",
    lease: "12 Yr",
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
    roi: "7.0%*",
    lease: "10 Yr",
    description: "Lifestyle retail tenant with brand recall and strong category relevance in urban retail markets.",
    start: "₹5.30 Cr",
    border: ""
  },
  {
    name: "Mini Klub",
    category: "lifestyle",
    type: "Lifestyle",
    logo: "image/miniklub-logo.png",
    status: "Available",
    roi: "7.0%*",
    lease: "12 Yr",
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
    roi: "6.50%*",
    lease: "10 Yr",
    description: "Modern jewellery retail tenant with strong urban appeal and premium high-street positioning.",
    start: "₹10.50 Cr",
    border: ""
  },
  {
    name: "PNG Jewellers",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/png-jewellers-logo.png",
    status: "Pre-Leased",
    roi: "7.0%*",
    lease: "12 Yr",
    description: "Established jewellery tenant supporting premium commercial value and high-ticket retail demand.",
    start: "₹10.50 Cr",
    border: ""
  },
  {
    name: "Right Gold",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/right-gold-logo.png",
    status: "Pre-Leased",
    roi: "7.0%*",
    lease: "10 Yr",
    description: "Gold jewellery tenant positioned for premium commercial spaces with strong rental income potential.",
    start: "₹10.50 Cr",
    border: ""
  },
  {
    name: "BlueStone",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/bluestone-logo.png",
    status: "Pre-Leased",
    roi: "6.90%*",
    lease: "12 Yr",
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
    roi: "7.0%*",
    lease: "10 Yr",
    description: "Premium jewellery tenant opportunity positioned for high-value commercial investment formats.",
    start: "₹11 Cr",
    border: ""
  },
  {
    name: "Manuvel Jewellers",
    category: "jewellery",
    type: "Jewellery",
    logo: "image/manuvel-malabar-logo.png",
    status: "Pre-Leased",
    roi: "6.80%*",
    lease: "12 Yr",
    description: "Large jewellery tenant opportunity with strong rental value and premium retail positioning.",
    start: "₹16 Cr",
    border: ""
  },
  {
    name: "Snapdeal",
    category: "office",
    type: "Office",
    logo: "image/snapdeal-logo.png",
    status: "Available",
    roi: "7.0%*",
    lease: "9 Yr",
    description: "Office tenant opportunity suited for business park formats with steady rental income potential.",
    start: "₹65 Lakhs",
    border: ""
  },
  {
    name: "StatusNeo",
    category: "office",
    type: "Office",
    logo: "image/statusneo-logo.png",
    status: "Available",
    roi: "7.0%*",
    lease: "15 Yr",
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
    roi: "7.0%*",
    lease: "15 Yr",
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
    roi: "7.0%*",
    lease: "10 Yr",
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
    roi: "7.0%*",
    lease: "12 Yr",
    description: "Managed workspace tenant supporting office demand, business occupancy and recurring rental potential.",
    start: "₹1.60 Cr",
    border: ""
  },
  {
    name: "Knowledge Centre",
    category: "office",
    type: "Office",
    logo: "image/knowledge-centre-logo.png",
    status: "Available",
    roi: "7.0%*",
    lease: "9 Yr",
    description: "Education and knowledge-focused office tenant suited for professional commercial environments.",
    start: "₹72 Lakhs",
    border: ""
  }
];

  const roiProfiles = {
    food: { rentFactor: 0.08 },
    retail: { rentFactor: 0.06 },
    lifestyle: { rentFactor: 0.075 },
    luxury: { rentFactor: 0.10 },
    office: { rentFactor: 0.075 },
    gaming: { rentFactor: 0.07 },
    jewellery: { rentFactor: 0.06 },
    bank: { rentFactor: 0.06 }
  };

  const compactModalLogoBrands = new Set(["21 FITNESS", "LuLu", "Giva", "Vivo"]);
  const roiOptions = [
    { value: "food", label: "Food and Beverage (8 - 10% p.a.)" },
    { value: "retail", label: "Anchor Retail - Retail (6% p.a.)" },
    { value: "lifestyle", label: "Life Style Stores (7.5% p.a.)" },
    { value: "luxury", label: "Luxury Stores (10% p.a.)" },
    { value: "office", label: "Office Spaces (7.5% p.a.)" }
  ];
  let currentRoiSnapshot = null;

  function formatIndianNumber(value) {
    return Math.round(value).toLocaleString("en-IN");
  }

  function parseInvestmentLakhs(value) {
    const rawValue = String(value || "");
    const amount = Number.parseFloat(rawValue.replace(/[^\d.]/g, ""));

    if (!Number.isFinite(amount)) return 0;
    if (/cr|crore/i.test(rawValue)) return amount * 100;
    return amount;
  }

  function parseAnnualRoi(value) {
    const percentage = Number.parseFloat(String(value || "").replace(/[^\d.]/g, ""));
    return Number.isFinite(percentage) ? percentage / 100 : 0;
  }

  function getBrandMonthlyRent(brand) {
    const investmentLakhs = parseInvestmentLakhs(brand.start);
    const annualRoi = parseAnnualRoi(brand.roi);

    if (!investmentLakhs || !annualRoi) return "";

    const monthlyRent = (investmentLakhs * 100000 * annualRoi) / 12;
    return `₹${formatIndianNumber(monthlyRent)}`;
  }

  function getBrandMonthlyRentValue(brand) {
    const investmentLakhs = parseInvestmentLakhs(brand.start);
    const annualRoi = parseAnnualRoi(brand.roi);

    if (!investmentLakhs || !annualRoi) return 0;
    return (investmentLakhs * 100000 * annualRoi) / 12;
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
    if (category === "bank") return "Banking";
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
      setLeadValue("[data-lead-monthly-rent]", getBrandMonthlyRent(selectedBrand));
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
      .slice();

    const rentalSortValue = rentalSort?.value || "default";
    const costSortValue = costSort?.value || "default";

    if (rentalSortValue !== "default") {
      visibleBrands.sort((a, b) => {
        const diff = getBrandMonthlyRentValue(a) - getBrandMonthlyRentValue(b);
        return rentalSortValue === "high" ? -diff : diff;
      });
    } else {
      visibleBrands.sort((a, b) => {
        const diff = parseInvestmentLakhs(a.start) - parseInvestmentLakhs(b.start);
        return costSortValue === "low" ? diff : -diff;
      });
    }

    brandGrid.innerHTML = visibleBrands.map((brand) => `
      <article class="brand-card ${brand.border}" data-brand-index="${brands.indexOf(brand)}" ${brand.soldOut ? 'aria-disabled="true"' : ""}>
        <div class="brand-card-top">
          ${brand.soldOut ? "" : `<span class="brand-status">${brand.status}</span>`}
          ${brand.soldOut ? `<img class="sold-out-stamp" src="${brand.soldOutStamp || "image/sold-out-stamp.png"}" alt="Sold out">` : ""}
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
            <div><strong>${getBrandMonthlyRent(brand)}</strong><span>Monthly</span></div>
          </div>
          <p>${brand.description}</p>
        </div>
        <div class="brand-card-bottom">
          <div class="invest-start">Investment Start: <strong>${brand.start}</strong></div>
          ${brand.soldOut
            ? `<button class="btn btn-sold-out" type="button" disabled>Sold Out</button>`
            : `<button class="btn btn-blue" type="button" data-open-modal data-brand-index="${brands.indexOf(brand)}">Invest Now →</button>`}
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
      if (brandCard.getAttribute("aria-disabled") === "true") return;
      const brandIndex = Number(brandCard.getAttribute("data-brand-index"));
      openModal(Number.isInteger(brandIndex) ? brands[brandIndex] : undefined);
    }

    if (target.matches("[data-filter]")) {
      document.querySelectorAll("[data-filter]").forEach((button) => button.classList.remove("active"));
      target.classList.add("active");
      activeFilter = target.getAttribute("data-filter") || "all";
      renderBrands(activeFilter);
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

  costSort?.addEventListener("change", () => {
    if (costSort.value !== "default" && rentalSort) rentalSort.value = "default";
    renderBrands(activeFilter);
  });

  rentalSort?.addEventListener("change", () => {
    if (rentalSort.value !== "default" && costSort) costSort.value = "default";
    renderBrands(activeFilter);
  });

  window.addEventListener("scroll", setHeaderState, { passive: true });

  renderBrands();
  updateRoi();
  setThankYouRedirects();
  startCountdown();
  setHeaderState();
  initRevealAnimations();
})();
