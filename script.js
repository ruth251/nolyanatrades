const revealTargets = document.querySelectorAll("[data-reveal]");

revealTargets.forEach((node, index) => {
  node.style.transitionDelay = `${Math.min(index * 45, 320)}ms`;
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealTargets.forEach((node) => revealObserver.observe(node));
} else {
  revealTargets.forEach((node) => node.classList.add("is-visible"));
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const storedLanguage = localStorage.getItem("site-language") || "en";

const languageLabels = {
  en: "English",
  zh: "中文",
  am: "አማርኛ",
};

const textTranslations = {
  zh: {
    Home: "首页",
    About: "关于我们",
    Products: "产品",
    Services: "服务",
    "Sister Companies": "姐妹公司",
    Contact: "联系",
    "Contact Us": "联系我们",
    "Start Inquiry": "开始咨询",
    "Book Now": "立即预订",
    "Explore Inventory": "浏览产品",
    "Our Services": "我们的服务",
    "Open Page": "打开页面",
    "View Profile": "查看简介",
    Pages: "页面",
    Companies: "公司",
    Explore: "探索",
    Phone: "电话",
    Email: "邮箱",
    "Contact page": "联系页面",
    "All companies": "全部公司",
    "All products": "全部产品",
    Back: "返回",
    "Company Contact": "公司联系",
    "Address & Phone": "地址与电话",
    WeChat: "微信",
    "WeChat 1": "微信二维码 1",
    "WeChat 2": "微信二维码 2",
    Ethiopia: "埃塞俄比亚",
    China: "中国",
    WhatsApp: "WhatsApp",
    Logistics: "物流",
    Trading: "贸易",
    Supply: "供应",
    Import: "进口",
    Tender: "招投标",
    "B NOSHA": "B NOSHA",
    SOLIANA: "SOLIANA",
    "Category Detail": "类别详情",
    Overview: "概览",
    "Back to Products": "返回产品页",
    "Start Inquiry": "开始咨询",
    "Ethiopia Address": "埃塞俄比亚地址",
    "Ethiopia Phone": "埃塞俄比亚电话",
    "China Address": "中国地址",
    "China Phones": "中国电话",
    Telegram: "Telegram",
    "Main Focus": "核心方向",
    "Core Identity": "核心定位",
    "Business Coverage": "业务范围",
    "Who We Are": "我们是谁",
    Consultation: "咨询",
    Planning: "规划",
    Sourcing: "采购",
    Handover: "交付",
    "Who we are and how we work": "了解我们以及我们的工作方式",
    "Detailed product categories": "详细产品分类",
    "Trading, import, logistics, and tender support": "贸易、进口、物流和招投标支持",
    "Two sister-company identities": "两家姐妹公司形象",
    "Project-oriented machinery and material supply.": "面向项目的机械与材料供应。",
    "Refined and premium sister-company identity.": "精致高端的姐妹公司形象。",
    "Scan and connect on WeChat.": "扫码通过微信联系。",
    "Direct contact points across Ethiopia and China.": "覆盖埃塞俄比亚和中国的直接联系信息。",
    "Featured Areas": "重点领域",
    "Capability, movement, and material supply shaped into one modern business front.": "将能力、流转与材料供应整合为一个现代化商业界面。",
    "Trade Transport": "贸易运输",
    "Transport and commercial movement": "运输与商业流转",
    "Truck movement, cargo coordination, and delivery planning support smoother commercial and project-linked supply operations.": "卡车运输、货运协调和交付计划让商业与项目供应运作更加顺畅。",
    "Ceramic Line": "陶瓷线",
    "Ceramic machinery line": "陶瓷机械线",
    "Production, cutting, and processing systems support ceramic factory work with a stronger industrial supply presentation.": "生产、切割和加工系统为陶瓷工厂提供更强的工业供应支持。",
    "Steel Work": "钢结构",
    "Steel structure support": "钢结构支持",
    "Steel warehouse, prefabricated building, and frame-based construction supply strengthen the company’s project delivery profile.": "钢仓库、预制建筑和框架结构供应强化公司的项目交付能力。",
    "Glass System": "玻璃系统",
    "Glass product": "玻璃产品",
    "Tempered, laminated, reflective, and architectural glass systems for modern projects.": "适用于现代项目的钢化、夹层、反射和建筑玻璃系统。",
    "Equipment Range": "设备范围",
    "Equipment lines built for real site demand.": "为真实工地需求而打造的设备线。",
    "Earthmoving and digging capability": "土方与挖掘能力",
    "Excavator supply supports trenching, site preparation, demolition work, and major ground movement with a practical project focus.": "挖掘机供应支持沟槽开挖、场地准备、拆除工作和大型土方作业。",
    "Material transfer and loading efficiency": "物料转运与装载效率",
    "Loader equipment supports stockyard handling, site movement, and faster transfer of heavy material across active work areas.": "装载机支持堆场作业、现场转运和重型物料的高效搬运。",
    "Warehouse and goods handling support": "仓储与货物搬运支持",
    "Forklift supply supports organized storage, pallet movement, and dependable handling of commercial goods.": "叉车供应支持有序仓储、托盘搬运和商业货物处理。",
    "Lifting and positioning solutions": "吊装与定位方案",
    "Crane categories help clients manage heavy lifting, structural positioning, and placement work on demanding sites.": "起重机类别帮助客户完成重型吊装、结构定位和复杂工地作业。",
    "Concrete preparation for active worksites": "活跃工地的混凝土准备",
    "Concrete mixer equipment supports efficient batching and preparation for building, road, and infrastructure tasks.": "混凝土搅拌设备支持建筑、道路和基础设施任务的高效配料与准备。",
    "Road shaping and surface control": "道路整形与地面控制",
    "Grader equipment helps with leveling, shaping, and surface finishing where accuracy and consistency are important.": "平地机帮助完成找平、整形和表面收整，适用于要求精度与一致性的场景。",
    "Transport and delivery support": "运输与交付支持",
    "Vehicle supply supports product movement, logistics planning, and dependable transport for commercial and project delivery needs.": "车辆供应支持产品流转、物流规划和商业项目交付运输。",
    "Maintenance and replacement continuity": "维护与替换连续性",
    "Spare part sourcing helps reduce downtime and protect the ongoing performance of valuable machinery and project equipment.": "备件采购有助于减少停机时间并保障机械与项目设备持续运转。",
    "Quick Access": "快速入口",
    "Move through the business from products to people.": "从产品到团队，快速了解整个业务。",
    "Company story, project support, construction categories, and work process details.": "公司故事、项目支持、施工类别与工作流程详情。",
    "Machinery, ceramic, steel, glass, and decor with deeper descriptions and imagery.": "机械、陶瓷、钢结构、玻璃和装饰，配有更深入的说明与图像。",
    "The service page gives more structure to the full company work and business support areas.": "服务页面更清晰地展示了公司的整体工作与业务支持范围。",
    "B NOSHA and SOLIANA each bring their own focus inside the group.": "B NOSHA 和 SOLIANA 在集团内部各自承担不同重点。",
    "General Trading Company focused on project supply, machinery, materials, logistics, and import support.": "专注于项目供应、机械、材料、物流与进口支持的综合贸易公司。",
    "The story, method, and supply direction shaping the company.": "塑造公司的故事、方法与供应方向。",
    "B NOSHA & SOLIANA General Trading Company works with contractors, developers, and commercial buyers through practical sourcing and coordinated delivery.": "B NOSHA & SOLIANA General Trading Company 通过务实采购与协同交付服务承包商、开发商和商业买家。",
    "One trading group connecting machinery, material, logistics, and finish supply.": "一个连接机械、材料、物流与饰面供应的贸易集团。",
    "The company combines construction machinery, industrial materials, factory machine access, spare part supply, logistics support, tender work, import coordination, ceramic systems, steel structures, glass systems, and decor.": "公司整合了工程机械、工业材料、工厂设备、备件供应、物流支持、招投标、进口协调、陶瓷系统、钢结构、玻璃系统和装饰业务。",
    Construction: "施工",
    "Interior Supply": "室内供应",
    "Connected logistics support": "联动物流支持",
    "Trade, cargo, and shipment coordination are part of the wider company offer.": "贸易、货运与运输协调都是公司整体业务的一部分。",
    "How We Work": "我们的工作方式",
    "A clear route from requirement to delivery.": "从需求到交付的清晰路径。",
    "Requirement planning with a clearer understanding of machinery, material, or trade needs.": "基于对机械、材料或贸易需求的清晰理解进行需求规划。",
    "Accurate planning and cost control to align categories, timing, and budgets.": "通过准确规划与成本控制协调品类、时间与预算。",
    "Efficient, safe, and quality-focused sourcing across project categories.": "在各类项目中进行高效、安全、注重质量的采购。",
    "Follow-up and excellence before final delivery or commercial handover.": "在最终交付或商业移交前做好跟进与品质把控。",
    "What We Do": "我们的业务",
    "Work areas built around projects, sourcing, and trade.": "围绕项目、采购与贸易构建的业务领域。",
    "Residential construction": "住宅建设",
    "Supply for residential build work, materials, and finishing requirements.": "为住宅建设提供施工、材料与饰面需求支持。",
    "Commercial construction": "商业建设",
    "Broader product coordination for commercial building and business-led procurement.": "面向商业建筑和企业采购的更广泛产品协调。",
    "Renovation and remodeling": "翻新与改造",
    "Interior-facing materials, ceramic surfaces, glass, and decorative supply options.": "面向室内的材料、陶瓷饰面、玻璃与装饰供应选项。",
    "Project management support": "项目管理支持",
    "Helping buyers coordinate categories, timing, and supplier alignment across multiple needs.": "帮助买家协调品类、时间安排和多需求下的供应商对接。",
    "Import and trade": "进口与贸易",
    "Import support from Ethiopia to China plus coffee, minerals, and oilseed trade coordination.": "提供从埃塞俄比亚到中国的进口支持，以及咖啡、矿产和油籽贸易协调。",
    "Bid and tender support": "招投标支持",
    "Commercial support for tender opportunities that require product range and supply planning.": "为需要产品组合与供应规划的招投标机会提供商业支持。",
    "Practical sourcing, project support, and cross-border trading backed by two sister-company identities.": "依托两家姐妹公司形象，提供务实采购、项目支持与跨境贸易。",
    "Construction machinery, materials, and trade categories.": "工程机械、材料与贸易分类。",
    "Product lines arranged for construction demand, industrial supply, and commercial sourcing.": "围绕施工需求、工业供应和商业采购整理的产品线。",
    "Construction Equipment": "工程设备",
    "Core equipment lines for demanding project work.": "面向高要求项目工作的核心设备线。",
    "Built for digging, trenching, demolition support, and controlled earthmoving on active project sites.": "适用于活跃项目工地的挖掘、开沟、拆除与可控土方作业。",
    "Mini Excavator": "小型挖掘机",
    "Mini excavator": "小型挖掘机",
    "Fits tighter spaces and supports smaller projects where flexibility and compact access matter.": "适用于更狭小空间和需要灵活进出的较小项目。",
    "Long Reach": "长臂型",
    "Long-reach excavator": "长臂挖掘机",
    "Designed for deep reach, special excavation work, and harder access areas.": "适用于深距作业、特殊开挖和更难进入的区域。",
    Loader: "装载机",
    "Wheel loader": "轮式装载机",
    "Supports loading, stockyard activity, and fast material handling where site efficiency is essential.": "支持装载、堆场作业以及强调现场效率的快速物料搬运。",
    "Compact Loader": "紧凑型装载机",
    "Compact loader": "紧凑型装载机",
    "Useful for smaller loading areas where agility and controlled movement are important.": "适用于较小装载区域，强调灵活性与可控移动。",
    "Track Loader": "履带装载机",
    "Track loader": "履带装载机",
    "Built for stronger traction and dependable performance on rough construction ground.": "适用于更强抓地力和粗糙施工地面的稳定表现。",
    "Used for heavy lifting, material positioning, and construction support tasks.": "用于重型吊装、材料定位和施工支持任务。",
    "Tower Crane": "塔式起重机",
    "Tower crane": "塔式起重机",
    "Supports vertical lifting work on larger construction developments and building sites.": "支持大型建筑开发和施工现场的垂直吊装作业。",
    "Lifting Crane": "吊装起重机",
    "Lifting crane": "吊装起重机",
    "Useful for handling heavy positioned loads and specialist lifting operations.": "适用于重载定位吊装和专项起重作业。",
    "Concrete Mixer": "混凝土搅拌机",
    "Concrete mixer": "混凝土搅拌机",
    "Supports building preparation, site concrete work, and practical construction mixing tasks.": "支持建筑准备、现场混凝土施工和实际搅拌任务。",
    Grader: "平地机",
    "Used for leveling, road shaping, and controlled finishing during infrastructure work.": "用于基础设施作业中的找平、道路整形与收面。",
    Bulldozer: "推土机",
    "Bulldozer & site support": "推土机与现场支持",
    "Supports clearing, pushing, and heavy site preparation alongside other active construction machinery.": "配合其他施工机械进行清场、推土和重型现场准备。",
    Truck: "卡车",
    "Truck & car": "卡车与车辆",
    "Supports product movement, transport planning, and day-to-day commercial delivery operations.": "支持产品流转、运输规划和日常商业交付。",
    "Trade & Supply": "贸易与供应",
    "Trade lines and material categories extending beyond machinery.": "超越机械设备的贸易线与材料类别。",
    "Factory Machine": "工厂设备",
    "Factory machine": "工厂设备",
    "Supports industrial operations, equipment sourcing, and production-linked commercial supply with stronger operational value.": "支持工业运营、设备采购和与生产相关的商业供应。",
    "Import from Ethiopia to China": "从埃塞俄比亚进口到中国",
    "Cross-border coordination designed to support sourcing, supply movement, and broader trade activity between markets.": "支持采购、货物流动以及跨市场贸易活动的跨境协调。",
    Coffee: "咖啡",
    "Coffee trade": "咖啡贸易",
    "Coffee supply sits inside the wider commodity and trade-focused business line.": "咖啡供应属于更广泛的商品与贸易业务线。",
    Mineral: "矿产",
    "Mineral trade": "矿产贸易",
    "Includes commercial interest in materials such as copper and titanium within the wider trade portfolio.": "在更广泛的贸易组合中包括铜、钛等材料的商业业务。",
    Oilseed: "油籽",
    "Oilseed business line": "油籽业务线",
    "Oilseed products expand the company profile beyond machinery into commodity-related trade activity and supply work.": "油籽产品将公司的业务从机械扩展到商品相关的贸易与供应。",
    "Bid and tender project": "招投标项目",
    "Supports proposal work, tender preparation, and project-led commercial opportunities with clearer structure.": "支持方案工作、投标准备和项目驱动的商业机会。",
    "Machinery, material, and trade categories shaped into a stronger product mix for real business demand.": "围绕真实业务需求打造更强的机械、材料与贸易产品组合。",
    "Trading, logistics, tender support, machinery sourcing, and project-led supply coordination.": "贸易、物流、招投标支持、机械采购与项目供应协调。",
    "Designed for clients who need sourcing, logistics, trade movement, and project support to work together.": "为需要将采购、物流、贸易流转和项目支持结合起来的客户而设计。",
    "Factory machine and spare part support": "工厂设备与备件支持",
    "Support for factory machine sourcing, part replacement needs, and commercial procurement work.": "支持工厂设备采购、零件更换需求和商业采购工作。",
    "Container, FCL, LCL, and cargo movement": "集装箱、整柜、拼柜与货运流转",
    "Structured logistics support for product movement across different shipment sizes and priorities.": "为不同货运规模和优先级提供结构化物流支持。",
    "Commercial import coordination designed to support sourcing and trade-linked transactions.": "为采购与贸易交易而设计的商业进口协调服务。",
    "Bid and tender project support": "招投标项目支持",
    "Category planning and commercial response support for tender and project-led opportunities.": "为招投标和项目机会提供品类规划与商业响应支持。",
    "Cross-category project procurement": "跨类别项目采购",
    "Machinery, ceramic, steel, glass, and decor move together as one connected supply offer.": "机械、陶瓷、钢结构、玻璃和装饰共同构成一体化供应方案。",
    Trade: "贸易",
    "Coffee, mineral, and oilseed coordination": "咖啡、矿产与油籽协调",
    "Commercial trade support for coffee, copper, titanium, and oilseed-related business lines.": "为咖啡、铜、钛和油籽相关业务线提供商业贸易支持。",
    "Mineral Trade": "矿产贸易",
    "Trade and commercial support": "贸易与商业支持",
    "Mineral and commodity-linked business lines strengthen the commercial side of the company.": "矿产和大宗商品相关业务线强化了公司的商业板块。",
    "Why This Matters": "为什么这很重要",
    "Service depth helps clients see a real operating partner.": "服务深度让客户看到真正的运营伙伴。",
    "Clearer description of what the company does": "更清晰地说明公司在做什么",
    "Better navigation for clients with different needs": "让不同需求的客户获得更好的导航体验",
    "Stronger service positioning for direct inquiries": "为直接咨询提供更强的服务定位",
    "More room to grow the company profile over time": "为公司形象的长期成长留出更多空间",
    "Service-focused trading and supply support for construction and commercial work.": "面向施工与商业业务的服务型贸易和供应支持。",
    "B NOSHA and SOLIANA": "B NOSHA 与 SOLIANA",
    "Operational strength built around machinery, movement, and supply execution.": "围绕机械、流转与供应执行构建的运营实力。",
    "B NOSHA carries the more operational side of the group through construction machinery, factory machine sourcing, spare parts, cargo coordination, tender work, and import support.": "B NOSHA 承担集团更偏运营的一面，涵盖工程机械、工厂设备采购、备件、货运协调、招投标和进口支持。",
    "Decoration, finish, and presentation with a softer premium edge.": "装饰、收边与展示，带有更柔和的高端气质。",
    "SOLIANA is shaped for decor, finish-led materials, attractive presentation, and client-facing product display.": "SOLIANA 专注于装饰、饰面材料、吸引人的展示方式以及面向客户的产品陈列。",
    "Two connected sister-company identities built around trading, project supply, and premium client presentation.": "围绕贸易、项目供应和高端客户展示而建立的两家相互连接的姐妹公司形象。",
    "Group Structure": "集团结构",
    "B NOSHA for machinery, trade, logistics, and project supply": "B NOSHA 负责机械、贸易、物流和项目供应",
    "SOLIANA for refined, finish-led company presentation": "SOLIANA 负责精致且注重饰面展示的公司形象",
    "B NOSHA Profile": "B NOSHA 简介",
    "SOLIANA Profile": "SOLIANA 简介",
    "Reach the company for machinery supply, trade support, logistics coordination, import work, tender support, and material sourcing.": "就机械供应、贸易支持、物流协调、进口业务、招投标支持和材料采购联系公司。",
    "Call China": "拨打中国电话",
    "Call Ethiopia": "拨打埃塞俄比亚电话",
    "Use this code for direct WeChat communication.": "使用此二维码直接通过微信联系。",
    "A second WeChat option for faster follow-up.": "第二个微信选项，方便更快跟进。",
    "Reach out for machinery, logistics, import, ceramic, steel, glass, and decor inquiries.": "欢迎联系机械、物流、进口、陶瓷、钢结构、玻璃和装饰相关咨询。",
    More: "更多",
    "Product page": "产品页面",
    "Decoration, elegant finishing, and beautiful spaces with a softer design character.": "装饰、优雅收边以及更柔和设计气质的美丽空间。",
    "SOLIANA highlights decor, styling, ceramic beauty, glass detail, and attractive finishing ideas for client-facing spaces.": "SOLIANA 突出装饰、造型、陶瓷美感、玻璃细节以及面向客户空间的吸引力收边方案。",
    "Finish-led identity": "饰面导向形象",
    "Ideal for design-facing product display, premium materials, and elegant client presentation.": "适合设计导向的产品展示、高端材料和优雅的客户呈现。",
    "SOLIANA Focus": "SOLIANA 重点",
    "Elegant material direction with a premium visual tone.": "以高端视觉调性呈现优雅材料方向。",
    "Decorative ceramic direction": "装饰陶瓷方向",
    "Glass and finish-led visual identity": "玻璃与饰面导向的视觉形象",
    "More attractive client-facing storytelling": "更具吸引力的客户展示表达",
    "Premium presentation inside the same company family": "同一公司体系内的高端展示形象",
  },
  am: {
    Home: "መነሻ",
    About: "ስለ እኛ",
    Products: "ምርቶች",
    Services: "አገልግሎቶች",
    "Sister Companies": "እህት ኩባንያዎች",
    Contact: "አግኙን",
    "Contact Us": "አግኙን",
    "Start Inquiry": "ጥያቄ ይጀምሩ",
    "Book Now": "አሁን ያስይዙ",
    "Explore Inventory": "እቃዎችን ይመልከቱ",
    "Our Services": "አገልግሎቶቻችን",
    "Open Page": "ገጹን ይክፈቱ",
    "View Profile": "መግለጫ ይመልከቱ",
    Pages: "ገፆች",
    Companies: "ኩባንያዎች",
    Explore: "ያስሱ",
    Phone: "ስልክ",
    Email: "ኢሜይል",
    "Contact page": "የመገናኛ ገጽ",
    "All companies": "ሁሉም ኩባንያዎች",
    "All products": "ሁሉም ምርቶች",
    Back: "ተመለስ",
    "Company Contact": "የኩባንያ መገናኛ",
    "Address & Phone": "አድራሻ እና ስልክ",
    WeChat: "ዊቻት",
    "WeChat 1": "ዊቻት 1",
    "WeChat 2": "ዊቻት 2",
    Ethiopia: "ኢትዮጵያ",
    China: "ቻይና",
    WhatsApp: "ዋትስአፕ",
    Logistics: "ሎጂስቲክስ",
    Trading: "ንግድ",
    Supply: "አቅርቦት",
    Import: "ማስመጣት",
    Tender: "ጨረታ",
    "B NOSHA": "B NOSHA",
    SOLIANA: "SOLIANA",
    "Category Detail": "ዝርዝር ምድብ",
    Overview: "አጠቃላይ ገለጻ",
    "Back to Products": "ወደ ምርቶች ተመለስ",
    "Ethiopia Address": "የኢትዮጵያ አድራሻ",
    "Ethiopia Phone": "የኢትዮጵያ ስልክ",
    "China Address": "የቻይና አድራሻ",
    "China Phones": "የቻይና ስልኮች",
    Telegram: "ቴሌግራም",
    "Main Focus": "ዋና ትኩረት",
    "Core Identity": "ዋና ማንነት",
    "Business Coverage": "የስራ ክልል",
    "Who We Are": "እኛ ማን ነን",
    Consultation: "ምክክር",
    Planning: "ዕቅድ",
    Sourcing: "ግዥ",
    Handover: "ርክክብ",
    "Who we are and how we work": "እኛ ማን ነን እና እንዴት እንሰራለን",
    "Detailed product categories": "ዝርዝር የምርት ምድቦች",
    "Trading, import, logistics, and tender support": "ንግድ፣ ማስመጣት፣ ሎጂስቲክስ እና የጨረታ ድጋፍ",
    "Two sister-company identities": "ሁለት የእህት ኩባንያ መለያዎች",
    "Project-oriented machinery and material supply.": "በፕሮጀክት ላይ የተመሠረተ የማሽነሪ እና ቁሳቁስ አቅርቦት።",
    "Refined and premium sister-company identity.": "የተሻለ እና ፕሪሚየም የእህት ኩባንያ ማንነት።",
    "Scan and connect on WeChat.": "QR ኮዱን በስካን ከዊቻት ጋር ይገናኙ።",
    "Direct contact points across Ethiopia and China.": "በኢትዮጵያ እና ቻይና የሚገኙ ቀጥተኛ የመገናኛ ነጥቦች።",
    "Featured Areas": "ዋና ዋና መስኮች",
    "Capability, movement, and material supply shaped into one modern business front.": "አቅም፣ እንቅስቃሴ እና የቁሳቁስ አቅርቦት በአንድ ዘመናዊ የንግድ ገጽታ ውስጥ ተዋህደዋል።",
    "Trade Transport": "የንግድ ትራንስፖርት",
    "Transport and commercial movement": "ትራንስፖርት እና የንግድ እንቅስቃሴ",
    "Truck movement, cargo coordination, and delivery planning support smoother commercial and project-linked supply operations.": "የጭነት መኪና እንቅስቃሴ፣ የጭነት ቅንጅት እና የማቅረብ ዕቅድ የንግድ እና ከፕሮጀክት ጋር የተያያዙ አቅርቦት ስራዎችን ያሳልጣሉ።",
    "Ceramic Line": "የሴራሚክ መስመር",
    "Ceramic machinery line": "የሴራሚክ ማሽነሪ መስመር",
    "Production, cutting, and processing systems support ceramic factory work with a stronger industrial supply presentation.": "የምርት፣ መቁረጫ እና ማቀናበሪያ ስርዓቶች የሴራሚክ ፋብሪካ ስራን በጠንካራ የኢንዱስትሪ አቅርቦት ድጋፍ ያበረታታሉ።",
    "Steel Work": "የብረት ስራ",
    "Steel structure support": "የብረት መዋቅር ድጋፍ",
    "Steel warehouse, prefabricated building, and frame-based construction supply strengthen the company’s project delivery profile.": "የብረት መጋዘን፣ የቅድሚያ ግንባታ እና በፍሬም የተመሰረተ የግንባታ አቅርቦት የኩባንያውን የፕሮጀክት አቅርቦት መለያ ያጠናክራሉ።",
    "Glass System": "የመስታወት ስርዓት",
    "Glass product": "የመስታወት ምርት",
    "Tempered, laminated, reflective, and architectural glass systems for modern projects.": "ለዘመናዊ ፕሮጀክቶች የታጠነ፣ የተደራረበ፣ አንጸባራቂ እና የሕንፃ መስታወት ስርዓቶች።",
    "Equipment Range": "የመሳሪያ ክልል",
    "Equipment lines built for real site demand.": "ለእውነተኛ የስራ ቦታ ፍላጎት የተገነቡ የመሳሪያ መስመሮች።",
    "Earthmoving and digging capability": "የመሬት ንቅናቄ እና ቁፋሮ አቅም",
    "Excavator supply supports trenching, site preparation, demolition work, and major ground movement with a practical project focus.": "የኤክስካቬተር አቅርቦት ቦይ ቁፋሮ፣ የስራ ቦታ ዝግጅት፣ የማፍረስ ስራ እና ትልቅ የመሬት ንቅናቄን ይደግፋል።",
    "Material transfer and loading efficiency": "የቁሳቁስ ማስተላለፍ እና የመጫን ብቃት",
    "Loader equipment supports stockyard handling, site movement, and faster transfer of heavy material across active work areas.": "የሎደር መሳሪያ የእቃ ማከማቻ ቦታ አያያዝ፣ የስራ ቦታ እንቅስቃሴ እና የከባድ ቁሳቁስ ፈጣን ማስተላለፍን ይደግፋል።",
    "Warehouse and goods handling support": "የመጋዘን እና የእቃ አያያዝ ድጋፍ",
    "Forklift supply supports organized storage, pallet movement, and dependable handling of commercial goods.": "የፎርክሊፍት አቅርቦት የተደራጀ ማከማቻ፣ የፓሌት እንቅስቃሴ እና የንግድ እቃዎች አስተማማኝ አያያዝን ይደግፋል።",
    "Lifting and positioning solutions": "የማንሳት እና የማስቀመጥ መፍትሄዎች",
    "Crane categories help clients manage heavy lifting, structural positioning, and placement work on demanding sites.": "የክሬን ምድቦች ደንበኞች ከባድ ማንሳት፣ የመዋቅር ማስቀመጥ እና በከባድ ስራ ቦታዎች ላይ የሚደረግ ስራ እንዲቆጣጠሩ ያግዛሉ።",
    "Concrete preparation for active worksites": "ለንቁ የስራ ቦታዎች የኮንክሪት ዝግጅት",
    "Concrete mixer equipment supports efficient batching and preparation for building, road, and infrastructure tasks.": "የኮንክሪት ሚክሰር መሳሪያዎች ለሕንፃ፣ ለመንገድ እና ለመሰረተ ልማት ስራዎች ብቃት ያለው ማቀናበር እና ዝግጅት ይደግፋሉ።",
    "Road shaping and surface control": "የመንገድ መቅረጽ እና የገፅታ ቁጥጥር",
    "Grader equipment helps with leveling, shaping, and surface finishing where accuracy and consistency are important.": "የግሬደር መሳሪያ ትክክለኛነት እና ወጥነት በሚጠበቅባቸው ቦታዎች ላይ ማስተካከል፣ መቅረጽ እና የገፅታ ማጠናቀቅን ያግዛል።",
    "Transport and delivery support": "የትራንስፖርት እና ማቅረብ ድጋፍ",
    "Vehicle supply supports product movement, logistics planning, and dependable transport for commercial and project delivery needs.": "የተሽከርካሪ አቅርቦት የምርት እንቅስቃሴ፣ የሎጂስቲክስ ዕቅድ እና ለንግድ እና ለፕሮጀክት ማቅረብ ፍላጎቶች አስተማማኝ ትራንስፖርትን ይደግፋል።",
    "Maintenance and replacement continuity": "የጥገና እና የመቀየር ቀጣይነት",
    "Spare part sourcing helps reduce downtime and protect the ongoing performance of valuable machinery and project equipment.": "የመለዋወጫ ክፍል ግዥ የስራ መቆምን ያነሳል እና ውድ የማሽነሪ እና የፕሮጀክት መሳሪያዎች አፈፃፀም እንዲቀጥል ያግዛል።",
    "Quick Access": "ፈጣን መዳረሻ",
    "Move through the business from products to people.": "ከምርቶች እስከ ቡድኑ ድረስ ንግዱን በፍጥነት ይመልከቱ።",
    "Company story, project support, construction categories, and work process details.": "የኩባንያ ታሪክ፣ የፕሮጀክት ድጋፍ፣ የግንባታ ምድቦች እና የስራ ሂደት ዝርዝሮች።",
    "Machinery, ceramic, steel, glass, and decor with deeper descriptions and imagery.": "ማሽነሪ፣ ሴራሚክ፣ ብረት፣ መስታወት እና ዲኮር ከበለጠ ገለጻ እና ምስሎች ጋር።",
    "The service page gives more structure to the full company work and business support areas.": "የአገልግሎት ገጹ ለኩባንያው ሙሉ የስራ እና የንግድ ድጋፍ መስኮች በለጠ አዋቂ መዋቅር ይሰጣል።",
    "B NOSHA and SOLIANA each bring their own focus inside the group.": "B NOSHA እና SOLIANA በቡድኑ ውስጥ የራሳቸውን ትኩረት ያመጣሉ።",
    "General Trading Company focused on project supply, machinery, materials, logistics, and import support.": "በፕሮጀክት አቅርቦት፣ ማሽነሪ፣ ቁሳቁሶች፣ ሎጂስቲክስ እና የማስመጣት ድጋፍ ላይ የተኮረ አጠቃላይ ንግድ ኩባንያ።",
    "The story, method, and supply direction shaping the company.": "ኩባንያውን የሚቀርፁ ታሪክ፣ የስራ ዘዴ እና የአቅርቦት አቅጣጫ።",
    "B NOSHA & SOLIANA General Trading Company works with contractors, developers, and commercial buyers through practical sourcing and coordinated delivery.": "B NOSHA & SOLIANA General Trading Company ከኮንትራክተሮች፣ ከዴቨሎፐሮች እና ከንግድ ገዥዎች ጋር በተግባራዊ ግዥ እና በተቀናጀ ማቅረብ ይሰራል።",
    "One trading group connecting machinery, material, logistics, and finish supply.": "ማሽነሪ፣ ቁሳቁስ፣ ሎጂስቲክስ እና ፊኒሽ አቅርቦትን የሚያገናኝ አንድ የንግድ ቡድን።",
    "The company combines construction machinery, industrial materials, factory machine access, spare part supply, logistics support, tender work, import coordination, ceramic systems, steel structures, glass systems, and decor.": "ኩባንያው የግንባታ ማሽነሪ፣ የኢንዱስትሪ ቁሳቁሶች፣ የፋብሪካ ማሽን መዳረሻ፣ የመለዋወጫ ክፍል አቅርቦት፣ የሎጂስቲክስ ድጋፍ፣ የጨረታ ስራ፣ የማስመጣት ቅንጅት፣ የሴራሚክ ስርዓቶች፣ የብረት መዋቅሮች፣ የመስታወት ስርዓቶች እና ዲኮርን ያካትታል።",
    Construction: "ግንባታ",
    "Interior Supply": "የውስጥ አቅርቦት",
    "Connected logistics support": "የተገናኘ የሎጂስቲክስ ድጋፍ",
    "Trade, cargo, and shipment coordination are part of the wider company offer.": "ንግድ፣ ጭነት እና የመላኪያ ቅንጅት የኩባንያው ሰፊ አቅርቦት ክፍል ናቸው።",
    "How We Work": "እንዴት እንሰራለን",
    "A clear route from requirement to delivery.": "ከፍላጎት እስከ ማቅረብ ድረስ የተገለጸ መንገድ።",
    "Requirement planning with a clearer understanding of machinery, material, or trade needs.": "የማሽነሪ፣ የቁሳቁስ ወይም የንግድ ፍላጎቶችን በበለጠ ግልጽ ሁኔታ በመረዳት የፍላጎት ዕቅድ ማዘጋጀት።",
    "Accurate planning and cost control to align categories, timing, and budgets.": "ምድቦችን፣ ጊዜን እና በጀትን ለማስተካከል ትክክለኛ ዕቅድ እና የወጪ ቁጥጥር።",
    "Efficient, safe, and quality-focused sourcing across project categories.": "በፕሮጀክት ምድቦች ሁሉ ላይ ውጤታማ፣ ደህንነቱ የተጠበቀ እና በጥራት ላይ የተመሰረተ ግዥ።",
    "Follow-up and excellence before final delivery or commercial handover.": "የመጨረሻ ማቅረብ ወይም የንግድ ርክክብ ከመደረጉ በፊት ክትትል እና ተጨማሪ ጥራት ስራ።",
    "What We Do": "የምንሰራው",
    "Work areas built around projects, sourcing, and trade.": "በፕሮጀክቶች፣ በግዥ እና በንግድ ዙሪያ የተገነቡ የስራ መስኮች።",
    "Residential construction": "የመኖሪያ ግንባታ",
    "Supply for residential build work, materials, and finishing requirements.": "ለመኖሪያ ግንባታ ስራ፣ ቁሳቁሶች እና የፊኒሽ ፍላጎቶች አቅርቦት።",
    "Commercial construction": "የንግድ ግንባታ",
    "Broader product coordination for commercial building and business-led procurement.": "ለንግድ ሕንፃ እና በንግድ የሚመራ ግዥ ሰፊ የምርት ቅንጅት።",
    "Renovation and remodeling": "እድሳት እና ማሻሻያ",
    "Interior-facing materials, ceramic surfaces, glass, and decorative supply options.": "የውስጥ አጠቃቀም ቁሳቁሶች፣ የሴራሚክ ገፆች፣ መስታወት እና የዲኮር አቅርቦት አማራጮች።",
    "Project management support": "የፕሮጀክት አስተዳደር ድጋፍ",
    "Helping buyers coordinate categories, timing, and supplier alignment across multiple needs.": "ገዥዎች ምድቦችን፣ ጊዜን እና በብዙ ፍላጎቶች ላይ የአቅራቢዎች ቅንጅትን እንዲያደርጉ ማገዝ።",
    "Import and trade": "ማስመጣት እና ንግድ",
    "Import support from Ethiopia to China plus coffee, minerals, and oilseed trade coordination.": "ከኢትዮጵያ ወደ ቻይና የማስመጣት ድጋፍ ከቡና፣ ከማዕድን እና ከዘይት ዘር የንግድ ቅንጅት ጋር።",
    "Bid and tender support": "የጨረታ ድጋፍ",
    "Commercial support for tender opportunities that require product range and supply planning.": "የምርት ክልል እና የአቅርቦት ዕቅድ ለሚፈልጉ የጨረታ እድሎች የንግድ ድጋፍ።",
    "Practical sourcing, project support, and cross-border trading backed by two sister-company identities.": "በሁለት የእህት ኩባንያ ማንነቶች የተደገፈ ተግባራዊ ግዥ፣ የፕሮጀክት ድጋፍ እና ድንበር ተሻጋሪ ንግድ።",
    "Construction machinery, materials, and trade categories.": "የግንባታ ማሽነሪ፣ ቁሳቁሶች እና የንግድ ምድቦች።",
    "Product lines arranged for construction demand, industrial supply, and commercial sourcing.": "ለግንባታ ፍላጎት፣ ለኢንዱስትሪ አቅርቦት እና ለንግድ ግዥ የተደራጀ የምርት መስመር።",
    "Construction Equipment": "የግንባታ መሳሪያ",
    "Core equipment lines for demanding project work.": "ለከባድ የፕሮጀክት ስራዎች ዋና የመሳሪያ መስመሮች።",
    "Built for digging, trenching, demolition support, and controlled earthmoving on active project sites.": "በንቁ የፕሮጀክት ቦታዎች ላይ ለቁፋሮ፣ ለቦይ ቁፋሮ፣ ለማፍረስ ድጋፍ እና ለቁጥጥር ያለው የመሬት ንቅናቄ የተገነባ።",
    "Mini Excavator": "አነስተኛ ኤክስካቬተር",
    "Mini excavator": "አነስተኛ ኤክስካቬተር",
    "Fits tighter spaces and supports smaller projects where flexibility and compact access matter.": "በታጠበ ቦታዎች ይገባል እና ተለዋዋጭነትና አነስተኛ መዳረሻ በሚያስፈልጉበት ትንንሽ ፕሮጀክቶችን ይደግፋል።",
    "Long Reach": "ረጅም ርቀት",
    "Long-reach excavator": "ረጅም ርቀት ኤክስካቬተር",
    "Designed for deep reach, special excavation work, and harder access areas.": "ለጥልቅ መድረስ፣ ልዩ የቁፋሮ ስራ እና ለአስቸጋሪ መዳረሻ ቦታዎች የተነደፈ።",
    Loader: "ሎደር",
    "Wheel loader": "ዊል ሎደር",
    "Supports loading, stockyard activity, and fast material handling where site efficiency is essential.": "በስራ ቦታ ብቃት በሚያስፈልግበት ሁኔታ መጫን፣ የእቃ ማከማቻ ቦታ እንቅስቃሴ እና ፈጣን የቁሳቁስ አያያዝን ይደግፋል።",
    "Compact Loader": "ኮምፓክት ሎደር",
    "Compact loader": "ኮምፓክት ሎደር",
    "Useful for smaller loading areas where agility and controlled movement are important.": "ተንቀሳቃሽነት እና ቁጥጥር ያለው እንቅስቃሴ በሚያስፈልግባቸው ትንንሽ የመጫኛ ቦታዎች ላይ ጠቃሚ ነው።",
    "Track Loader": "ትራክ ሎደር",
    "Track loader": "ትራክ ሎደር",
    "Built for stronger traction and dependable performance on rough construction ground.": "በጠንካራ መጣበቅ እና በአስቸጋሪ የግንባታ መሬት ላይ አስተማማኝ አፈፃፀም የተገነባ።",
    "Used for heavy lifting, material positioning, and construction support tasks.": "ለከባድ ማንሳት፣ ለቁሳቁስ ማስቀመጥ እና ለግንባታ ድጋፍ ስራዎች ይጠቅማል።",
    "Tower Crane": "ታወር ክሬን",
    "Tower crane": "ታወር ክሬን",
    "Supports vertical lifting work on larger construction developments and building sites.": "በትላልቅ የግንባታ ልማቶች እና በሕንፃ ቦታዎች ላይ ቀጥታ የማንሳት ስራን ይደግፋል።",
    "Lifting Crane": "ማንሳት ክሬን",
    "Lifting crane": "ማንሳት ክሬን",
    "Useful for handling heavy positioned loads and specialist lifting operations.": "በተወሰነ ቦታ ያሉ ከባድ ጭነቶችን ለማንሳት እና ልዩ የማንሳት ስራዎች ጠቃሚ ነው።",
    "Concrete Mixer": "ኮንክሪት ሚክሰር",
    "Concrete mixer": "ኮንክሪት ሚክሰር",
    "Supports building preparation, site concrete work, and practical construction mixing tasks.": "የሕንፃ ዝግጅት፣ የስራ ቦታ ኮንክሪት ስራ እና ተግባራዊ የግንባታ ማቀላቀል ስራዎችን ይደግፋል።",
    Grader: "ግሬደር",
    "Used for leveling, road shaping, and controlled finishing during infrastructure work.": "በመሰረተ ልማት ስራዎች ወቅት ለማስተካከል፣ ለመንገድ መቅረጽ እና በቁጥጥር ያለ ማጠናቀቅ ይጠቅማል።",
    Bulldozer: "ቡልዶዘር",
    "Bulldozer & site support": "ቡልዶዘር እና የስራ ቦታ ድጋፍ",
    "Supports clearing, pushing, and heavy site preparation alongside other active construction machinery.": "ከሌሎች ንቁ የግንባታ ማሽነሪዎች ጋር በመሆን ማጽዳት፣ መግፋት እና ከባድ የስራ ቦታ ዝግጅትን ይደግፋል።",
    Truck: "ትራክ",
    "Truck & car": "ትራክ እና መኪና",
    "Supports product movement, transport planning, and day-to-day commercial delivery operations.": "የምርት እንቅስቃሴ፣ የትራንስፖርት ዕቅድ እና የቀን ተቀን የንግድ ማቅረብ ስራዎችን ይደግፋል።",
    "Trade & Supply": "ንግድ እና አቅርቦት",
    "Trade lines and material categories extending beyond machinery.": "ከማሽነሪ በላይ የሚዘልቁ የንግድ መስመሮች እና የቁሳቁስ ምድቦች።",
    "Factory Machine": "የፋብሪካ ማሽን",
    "Factory machine": "የፋብሪካ ማሽን",
    "Supports industrial operations, equipment sourcing, and production-linked commercial supply with stronger operational value.": "የኢንዱስትሪ ስራዎችን፣ የመሳሪያ ግዥን እና ከምርት ጋር የተያያዘ የንግድ አቅርቦትን በጠንካራ የስራ እሴት ይደግፋል።",
    "Import from Ethiopia to China": "ከኢትዮጵያ ወደ ቻይና ማስመጣት",
    "Cross-border coordination designed to support sourcing, supply movement, and broader trade activity between markets.": "በገበያዎች መካከል ግዥን፣ የአቅርቦት እንቅስቃሴን እና ሰፊ የንግድ እንቅስቃሴን ለመደገፍ የተነደፈ የድንበር ተሻጋሪ ቅንጅት።",
    Coffee: "ቡና",
    "Coffee trade": "የቡና ንግድ",
    "Coffee supply sits inside the wider commodity and trade-focused business line.": "የቡና አቅርቦት በሰፊው የምርት እና በንግድ ላይ የተተኮረ የንግድ መስመር ውስጥ ይገኛል።",
    Mineral: "ማዕድን",
    "Mineral trade": "የማዕድን ንግድ",
    "Includes commercial interest in materials such as copper and titanium within the wider trade portfolio.": "በሰፊው የንግድ ፖርትፎሊዮ ውስጥ እንደ ኮፐር እና ቲታኒየም ያሉ ቁሳቁሶች ላይ የንግድ ፍላጎትን ያካትታል።",
    Oilseed: "ዘይት ዘር",
    "Oilseed business line": "የዘይት ዘር የንግድ መስመር",
    "Oilseed products expand the company profile beyond machinery into commodity-related trade activity and supply work.": "የዘይት ዘር ምርቶች የኩባንያውን መለያ ከማሽነሪ በላይ ወደ ከምርት ጋር የተያያዘ የንግድ እንቅስቃሴ እና የአቅርቦት ስራ ያስፋፋሉ።",
    "Bid and tender project": "የጨረታ ፕሮጀክት",
    "Supports proposal work, tender preparation, and project-led commercial opportunities with clearer structure.": "የፕሮፖዛል ስራ፣ የጨረታ ዝግጅት እና በፕሮጀክት የሚመሩ የንግድ እድሎችን በበለጠ ግልጽ መዋቅር ይደግፋል።",
    "Machinery, material, and trade categories shaped into a stronger product mix for real business demand.": "ለእውነተኛ የንግድ ፍላጎት የተጠናከሩ የማሽነሪ፣ የቁሳቁስ እና የንግድ ምድቦች።",
    "Trading, logistics, tender support, machinery sourcing, and project-led supply coordination.": "ንግድ፣ ሎጂስቲክስ፣ የጨረታ ድጋፍ፣ የማሽነሪ ግዥ እና በፕሮጀክት የሚመራ የአቅርቦት ቅንጅት።",
    "Designed for clients who need sourcing, logistics, trade movement, and project support to work together.": "ግዥ፣ ሎጂስቲክስ፣ የንግድ እንቅስቃሴ እና የፕሮጀክት ድጋፍ አንድ ላይ እንዲሰሩ ለሚፈልጉ ደንበኞች የተነደፈ።",
    "Factory machine and spare part support": "የፋብሪካ ማሽን እና የመለዋወጫ ክፍል ድጋፍ",
    "Support for factory machine sourcing, part replacement needs, and commercial procurement work.": "ለፋብሪካ ማሽን ግዥ፣ ለክፍል መቀየሪያ ፍላጎቶች እና ለንግድ ግዥ ስራ ድጋፍ።",
    "Container, FCL, LCL, and cargo movement": "ኮንቴነር፣ FCL፣ LCL እና የጭነት እንቅስቃሴ",
    "Structured logistics support for product movement across different shipment sizes and priorities.": "ለተለያዩ የጭነት መጠኖችና ቅድሚያዎች የምርት እንቅስቃሴ የተዋቀረ የሎጂስቲክስ ድጋፍ።",
    "Commercial import coordination designed to support sourcing and trade-linked transactions.": "ግዥን እና ከንግድ ጋር የተያያዙ ግብይቶችን ለመደገፍ የተነደፈ የንግድ ማስመጣት ቅንጅት።",
    "Bid and tender project support": "የጨረታ ፕሮጀክት ድጋፍ",
    "Category planning and commercial response support for tender and project-led opportunities.": "ለጨረታ እና በፕሮጀክት የሚመሩ እድሎች የምድብ ዕቅድ እና የንግድ ምላሽ ድጋፍ።",
    "Cross-category project procurement": "ከተለያዩ ምድቦች የሚያቀፍ የፕሮጀክት ግዥ",
    "Machinery, ceramic, steel, glass, and decor move together as one connected supply offer.": "ማሽነሪ፣ ሴራሚክ፣ ብረት፣ መስታወት እና ዲኮር እንደ አንድ የተገናኘ የአቅርቦት አቅርቦት አብረው ይንቀሳቀሳሉ።",
    Trade: "ንግድ",
    "Coffee, mineral, and oilseed coordination": "የቡና፣ የማዕድን እና የዘይት ዘር ቅንጅት",
    "Commercial trade support for coffee, copper, titanium, and oilseed-related business lines.": "ለቡና፣ ለኮፐር፣ ለቲታኒየም እና ከዘይት ዘር ጋር የተያያዙ የንግድ መስመሮች የንግድ ድጋፍ።",
    "Mineral Trade": "የማዕድን ንግድ",
    "Trade and commercial support": "የንግድ እና የንግድ ድጋፍ",
    "Mineral and commodity-linked business lines strengthen the commercial side of the company.": "ከማዕድን እና ከምርት ጋር የተያያዙ የንግድ መስመሮች የኩባንያውን የንግድ ወገን ያጠናክራሉ።",
    "Why This Matters": "ይህ ለምን አስፈላጊ ነው",
    "Service depth helps clients see a real operating partner.": "የአገልግሎት ጥልቀት ደንበኞች እውነተኛ የስራ አጋር እንዲያዩ ያግዛል።",
    "Clearer description of what the company does": "ኩባንያው የሚያደርገው ነገር በበለጠ ግልጽ መልኩ ማብራራት",
    "Better navigation for clients with different needs": "ለተለያዩ ፍላጎቶች ያላቸው ደንበኞች የተሻለ መመሪያ",
    "Stronger service positioning for direct inquiries": "ለቀጥታ ጥያቄዎች ጠንካራ የአገልግሎት አቀማመጥ",
    "More room to grow the company profile over time": "የኩባንያው መለያ በጊዜ ሂደት እንዲያድግ ተጨማሪ ቦታ",
    "Service-focused trading and supply support for construction and commercial work.": "ለግንባታ እና ለንግድ ስራ በአገልግሎት ላይ የተተኮረ የንግድ እና የአቅርቦት ድጋፍ።",
    "B NOSHA and SOLIANA": "B NOSHA እና SOLIANA",
    "Operational strength built around machinery, movement, and supply execution.": "በማሽነሪ፣ በእንቅስቃሴ እና በአቅርቦት አፈፃፀም ዙሪያ የተገነባ የስራ ጥንካሬ።",
    "B NOSHA carries the more operational side of the group through construction machinery, factory machine sourcing, spare parts, cargo coordination, tender work, and import support.": "B NOSHA በግንባታ ማሽነሪ፣ በፋብሪካ ማሽን ግዥ፣ በመለዋወጫ ክፍሎች፣ በጭነት ቅንጅት፣ በጨረታ ስራ እና በማስመጣት ድጋፍ በኩባንያው ውስጥ የበለጠ የስራ ወገንን ይይዛል።",
    "Decoration, finish, and presentation with a softer premium edge.": "ዲኮሬሽን፣ ፊኒሽ እና ማቅረብ ከቀለል ያለ ፕሪሚየም ባህሪ ጋር።",
    "SOLIANA is shaped for decor, finish-led materials, attractive presentation, and client-facing product display.": "SOLIANA ለዲኮር፣ ለፊኒሽ የሚመሩ ቁሳቁሶች፣ ለሚስብ ማቅረብ እና ለደንበኛ ፊት ለፊት የምርት ማሳያ የተቀረፀ ነው።",
    "Two connected sister-company identities built around trading, project supply, and premium client presentation.": "በንግድ፣ በፕሮጀክት አቅርቦት እና በፕሪሚየም የደንበኛ ማቅረብ ዙሪያ የተገነቡ ሁለት የተገናኙ የእህት ኩባንያ ማንነቶች።",
    "Group Structure": "የቡድን መዋቅር",
    "B NOSHA for machinery, trade, logistics, and project supply": "B NOSHA ለማሽነሪ፣ ለንግድ፣ ለሎጂስቲክስ እና ለፕሮጀክት አቅርቦት",
    "SOLIANA for refined, finish-led company presentation": "SOLIANA ለተሻለ እና በፊኒሽ የሚመራ የኩባንያ ማቅረብ",
    "B NOSHA Profile": "የ B NOSHA መግለጫ",
    "SOLIANA Profile": "የ SOLIANA መግለጫ",
    "Reach the company for machinery supply, trade support, logistics coordination, import work, tender support, and material sourcing.": "ለማሽነሪ አቅርቦት፣ ለንግድ ድጋፍ፣ ለሎጂስቲክስ ቅንጅት፣ ለማስመጣት ስራ፣ ለጨረታ ድጋፍ እና ለቁሳቁስ ግዥ ኩባንያውን ያነጋግሩ።",
    "Call China": "ወደ ቻይና ይደውሉ",
    "Call Ethiopia": "ወደ ኢትዮጵያ ይደውሉ",
    "Use this code for direct WeChat communication.": "ለቀጥታ የዊቻት ግንኙነት ይህን ኮድ ይጠቀሙ።",
    "A second WeChat option for faster follow-up.": "ለፈጣን ክትትል ሁለተኛ የዊቻት አማራጭ።",
    "Reach out for machinery, logistics, import, ceramic, steel, glass, and decor inquiries.": "ለማሽነሪ፣ ለሎጂስቲክስ፣ ለማስመጣት፣ ለሴራሚክ፣ ለብረት፣ ለመስታወት እና ለዲኮር ጥያቄዎች ይገናኙ።",
    More: "ተጨማሪ",
    "Product page": "የምርት ገጽ",
    "Decoration, elegant finishing, and beautiful spaces with a softer design character.": "ዲኮሬሽን፣ ውብ ፊኒሽ እና በቀለል ያለ የዲዛይን ባህሪ ያላቸው ውብ ቦታዎች።",
    "SOLIANA highlights decor, styling, ceramic beauty, glass detail, and attractive finishing ideas for client-facing spaces.": "SOLIANA ለደንበኛ ፊት ለፊት ቦታዎች ዲኮር፣ ስታይል፣ የሴራሚክ ውበት፣ የመስታወት ዝርዝር እና ሚስቡ የፊኒሽ ሀሳቦችን ያበራል።",
    "Finish-led identity": "በፊኒሽ የሚመራ ማንነት",
    "Ideal for design-facing product display, premium materials, and elegant client presentation.": "ለዲዛይን ተመራ የምርት ማሳያ፣ ፕሪሚየም ቁሳቁሶች እና ውብ የደንበኛ ማቅረብ ተስማሚ።",
    "SOLIANA Focus": "የ SOLIANA ትኩረት",
    "Elegant material direction with a premium visual tone.": "ከፕሪሚየም የእይታ ስሜት ጋር የውብ ቁሳቁስ አቅጣጫ።",
    "Decorative ceramic direction": "የዲኮሬቲቭ ሴራሚክ አቅጣጫ",
    "Glass and finish-led visual identity": "መስታወት እና በፊኒሽ የሚመራ የእይታ ማንነት",
    "More attractive client-facing storytelling": "በደንበኛ ፊት ለፊት የበለጠ ሚስብ የታሪክ አቀራረብ",
    "Premium presentation inside the same company family": "በአንድ የኩባንያ ቤተሰብ ውስጥ ፕሪሚየም ማቅረብ",
  },
};

const selectorTranslations = {
  "index.html": {
    zh: {
      "a[data-page='products.html']": "机械设备",
      "a[href='products.html#heavy-duty']": "重型设备",
      "a[data-page='about.html']": "公司",
      "a[data-page='products.html']:last-of-type": "设备",
      ".hero--landing .eyebrow": "共建未来",
      ".hero--landing h1": "<span>B NOSHA &amp;</span><span class=\"hero__accent\">SOLIANA</span>",
      ".hero--landing .hero__lede":
        "通过精准机械供应和战略材料采购，推动全球贸易，服务重型基础设施项目。",
    },
    am: {
      "a[data-page='products.html']": "ማሽነሪ",
      "a[href='products.html#heavy-duty']": "ከባድ ስራ",
      "a[data-page='about.html']": "ኩባንያ",
      "a[data-page='products.html']:last-of-type": "መሳሪያ",
      ".hero--landing .eyebrow": "ዛሬ የነገን ግንባታ",
      ".hero--landing h1": "<span>B NOSHA &amp;</span><span class=\"hero__accent\">SOLIANA</span>",
      ".hero--landing .hero__lede":
        "ለከባድ መሰረተ ልማት ፕሮጀክቶች ትክክለኛ የማሽነሪ አቅርቦት እና ዘመናዊ የቁሳቁስ ግዥ በመጠቀም ዓለም አቀፍ ንግድን እናበረታታለን።",
    },
  },
  "about.html": {
    zh: {
      ".page-banner__card h1": "塑造公司发展的故事、方法与供应方向。",
      ".page-banner__card p:last-of-type":
        "B NOSHA & SOLIANA General Trading Company 通过务实采购与协同交付服务承包商、开发商和商业采购方。",
    },
    am: {
      ".page-banner__card h1": "የኩባንያውን አቅጣጫ የሚቀርፁ ታሪክ፣ የስራ ዘዴ እና የአቅርቦት መንገድ።",
      ".page-banner__card p:last-of-type":
        "B NOSHA & SOLIANA General Trading Company ለኮንትራክተሮች፣ ለዴቨሎፐሮች እና ለንግድ ገዥዎች በተግባራዊ ግዥ እና በተቀናጀ አቅርቦት ይሰራል።",
    },
  },
  "products.html": {
    zh: {
      ".page-banner__card h1": "工程机械、材料与贸易分类。",
      ".page-banner__card p:last-of-type": "围绕施工需求、工业供应和商业采购整理的产品线。",
    },
    am: {
      ".page-banner__card h1": "የኮንስትራክሽን ማሽነሪ፣ ቁሳቁሶች እና የንግድ ምድቦች።",
      ".page-banner__card p:last-of-type":
        "ለግንባታ ፍላጎት፣ ለኢንዱስትሪ አቅርቦት እና ለንግድ ግዥ የተደራጀ የምርት መስመር።",
    },
  },
  "services.html": {
    zh: {
      ".page-banner__card h1": "贸易、物流、招投标支持、机械采购与项目供应协调。",
      ".page-banner__card p:last-of-type": "为需要把采购、物流、贸易流转和项目支持结合起来的客户而设计。",
    },
    am: {
      ".page-banner__card h1": "ንግድ፣ ሎጂስቲክስ፣ የጨረታ ድጋፍ፣ የማሽነሪ ግዥ እና የፕሮጀክት አቅርቦት ቅንጅት።",
      ".page-banner__card p:last-of-type":
        "ግዥ፣ ሎጂስቲክስ፣ የንግድ እንቅስቃሴ እና የፕሮጀክት ድጋፍ አንድ ላይ እንዲሰሩ ለሚፈልጉ ደንበኞች የተነደፈ።",
    },
  },
  "companies.html": {
    zh: {
      ".page-banner__card .eyebrow": "姐妹公司",
      ".page-banner__card h1": "B NOSHA 与 SOLIANA",
    },
    am: {
      ".page-banner__card .eyebrow": "እህት ኩባንያዎች",
      ".page-banner__card h1": "B NOSHA እና SOLIANA",
    },
  },
  "contact.html": {
    zh: {
      ".page-banner__card h1": "联系我们",
      ".contact-feature h3": "B NOSHA & SOLIANA General Trading Company",
      ".contact-feature p:last-of-type":
        "就机械供应、贸易支持、物流协调、进口业务、招投标支持和材料采购与公司联系。",
    },
    am: {
      ".page-banner__card h1": "አግኙን",
      ".contact-feature h3": "B NOSHA & SOLIANA General Trading Company",
      ".contact-feature p:last-of-type":
        "ለማሽነሪ አቅርቦት፣ ለንግድ ድጋፍ፣ ለሎጂስቲክስ ቅንጅት፣ ለማስመጣት ስራ፣ ለጨረታ ድጋፍ እና ለቁሳቁስ ግዥ ኩባንያውን ያነጋግሩ።",
    },
  },
  "company-b.html": {
    zh: {
      ".page-banner__card h1": "机械、工业材料、陶瓷、钢结构、玻璃与装饰统一于更强的供应形象之下。",
      ".page-banner__card p:last-of-type": "B NOSHA 是集团中更偏向施工与项目供应的核心形象。",
    },
    am: {
      ".page-banner__card h1": "ማሽነሪ፣ ኢንዱስትሪ ቁሳቁስ፣ ሴራሚክ፣ ብረት፣ መስታወት እና ዲኮር በአንድ ጠንካራ የአቅርቦት መለያ ስር።",
      ".page-banner__card p:last-of-type": "B NOSHA በኩባንያው ቡድን ውስጥ የግንባታ እና የፕሮጀክት አቅርቦት ጠንካራ ወገን ነው።",
    },
  },
  "company-soliana.html": {
    zh: {
      ".page-banner__card h1": "装饰、精致收边与更柔和设计气质的美丽空间。",
      ".page-banner__card p:last-of-type": "SOLIANA 突出装饰、风格、陶瓷之美、玻璃细节以及面向客户空间的吸引力收边方案。",
    },
    am: {
      ".page-banner__card h1": "ዲኮሬሽን፣ ውብ ፊኒሽ እና ለስላሳ የዲዛይን ባህሪ ያላቸው ውብ ቦታዎች።",
      ".page-banner__card p:last-of-type": "SOLIANA ዲኮር፣ ስታይል፣ የሴራሚክ ውበት፣ የመስታወት ዝርዝር እና ለደንበኛ ቦታዎች የሚስቡ የፊኒሽ ሀሳቦችን ያቀርባል።",
    },
  },
  "company-nosha.html": {
    zh: {
      ".page-banner__card h1": "机械、工业材料、陶瓷、钢结构、玻璃与装饰统一于更强的供应形象之下。",
      ".page-banner__card p:last-of-type": "B NOSHA 是集团中更偏向施工与项目供应的核心形象。",
    },
    am: {
      ".page-banner__card h1": "ማሽነሪ፣ ኢንዱስትሪ ቁሳቁስ፣ ሴራሚክ፣ ብረት፣ መስታወት እና ዲኮር በአንድ ጠንካራ የአቅርቦት መለያ ስር።",
      ".page-banner__card p:last-of-type": "B NOSHA በኩባንያው ቡድን ውስጥ የግንባታ እና የፕሮጀክት አቅርቦት ጠንካራ ወገን ነው።",
    },
  },
  "detail.html": {
    zh: {
      "#detail-eyebrow": "类别详情",
      "#detail-intro": "关于该产品或服务类别的详细信息。",
      "#detail-summary": "本页面以更清晰、更实用的方式介绍这一类别。",
    },
    am: {
      "#detail-eyebrow": "ዝርዝር ምድብ",
      "#detail-intro": "ስለዚህ የምርት ወይም የአገልግሎት ምድብ ዝርዝር መረጃ።",
      "#detail-summary": "ይህ ገጽ ምድቡን በተሻለ ግልጽነት እና በተግባራዊ መንገድ ያቀርባል።",
    },
  },
};

const titleTranslations = {
  zh: {
    "index.html": "B NOSHA & SOLIANA | 首页",
    "about.html": "B NOSHA & SOLIANA | 关于",
    "products.html": "B NOSHA & SOLIANA | 产品",
    "services.html": "B NOSHA & SOLIANA | 服务",
    "companies.html": "B NOSHA & SOLIANA | 姐妹公司",
    "contact.html": "B NOSHA & SOLIANA | 联系",
    "company-b.html": "B NOSHA | B NOSHA & SOLIANA",
    "company-soliana.html": "SOLIANA | B NOSHA & SOLIANA",
    "company-nosha.html": "B NOSHA | B NOSHA & SOLIANA",
    "detail.html": "类别详情 | B NOSHA & SOLIANA",
  },
  am: {
    "index.html": "B NOSHA & SOLIANA | መነሻ",
    "about.html": "B NOSHA & SOLIANA | ስለ እኛ",
    "products.html": "B NOSHA & SOLIANA | ምርቶች",
    "services.html": "B NOSHA & SOLIANA | አገልግሎቶች",
    "companies.html": "B NOSHA & SOLIANA | እህት ኩባንያዎች",
    "contact.html": "B NOSHA & SOLIANA | አግኙን",
    "company-b.html": "B NOSHA | B NOSHA & SOLIANA",
    "company-soliana.html": "SOLIANA | B NOSHA & SOLIANA",
    "company-nosha.html": "B NOSHA | B NOSHA & SOLIANA",
    "detail.html": "ዝርዝር ምድብ | B NOSHA & SOLIANA",
  },
};

function injectLanguageSwitcher() {
  document.querySelectorAll(".site-header").forEach((header) => {
    if (header.querySelector(".language-switcher")) {
      return;
    }

    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.innerHTML = `
      <label class="language-switcher__label" for="site-language">Lang</label>
      <select id="site-language" class="language-switcher__select" aria-label="Language switcher">
        <option value="en">English</option>
        <option value="zh">中文</option>
        <option value="am">አማርኛ</option>
      </select>
    `;

    const cta = header.querySelector(".header-cta");
    if (cta) {
      header.insertBefore(switcher, cta);
    } else {
      header.appendChild(switcher);
    }
  });
}

function storeOriginalContent() {
  document.querySelectorAll("body *").forEach((node) => {
    if (
      node.closest(".language-switcher") ||
      ["SCRIPT", "STYLE", "OPTION", "SELECT"].includes(node.tagName)
    ) {
      return;
    }

    if (!node.dataset.i18nOriginalText && node.childElementCount === 0) {
      const text = node.textContent.trim();
      if (text) {
        node.dataset.i18nOriginalText = text;
      }
    }

    if (!node.dataset.i18nOriginalHtml && (node.matches("h1") || node.matches("title"))) {
      node.dataset.i18nOriginalHtml = node.innerHTML;
    }
  });
}

function applyTextTranslations(lang) {
  document.querySelectorAll("body *").forEach((node) => {
    if (node.closest(".language-switcher") || !node.dataset.i18nOriginalText) {
      return;
    }

    const original = node.dataset.i18nOriginalText;
    const translated = textTranslations[lang]?.[original];
    node.textContent = translated || original;
  });
}

function applySelectorTranslations(lang) {
  const pageTranslations = selectorTranslations[currentPage]?.[lang] || {};

  Object.entries(pageTranslations).forEach(([selector, value]) => {
    const node = document.querySelector(selector);
    if (!node) {
      return;
    }

    if (value.includes("<span") || value.includes("&amp;")) {
      if (!node.dataset.i18nOriginalHtml) {
        node.dataset.i18nOriginalHtml = node.innerHTML;
      }
      node.innerHTML = value;
      return;
    }

    if (!node.dataset.i18nOriginalText) {
      node.dataset.i18nOriginalText = node.textContent.trim();
    }
    node.textContent = value;
  });

  if (lang === "en") {
    document.querySelectorAll("[data-i18n-original-html]").forEach((node) => {
      if (selectorTranslations[currentPage] && Object.keys(selectorTranslations[currentPage]).length) {
        node.innerHTML = node.dataset.i18nOriginalHtml;
      }
    });
  }
}

function updateDocumentTitle(lang) {
  if (lang === "en") {
    if (document.documentElement.dataset.originalTitle) {
      document.title = document.documentElement.dataset.originalTitle;
    }
    return;
  }

  const translatedTitle = titleTranslations[lang]?.[currentPage];
  if (translatedTitle) {
    document.title = translatedTitle;
  }
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  applyTextTranslations(lang);
  applySelectorTranslations(lang);
  updateDocumentTitle(lang);

  document.querySelectorAll(".language-switcher__select").forEach((select) => {
    select.value = lang;
  });
}

function initializeLanguageSwitcher() {
  injectLanguageSwitcher();
  storeOriginalContent();
  document.documentElement.dataset.originalTitle = document.title;

  document.querySelectorAll(".language-switcher__select").forEach((select) => {
    select.value = storedLanguage;
    select.addEventListener("change", (event) => {
      const nextLanguage = event.target.value;
      localStorage.setItem("site-language", nextLanguage);
      applyLanguage(nextLanguage);
    });
  });

  applyLanguage(storedLanguage);
}

document.querySelectorAll("[data-page]").forEach((link) => {
  const href = link.getAttribute("href");
  const isCompanyDetail = currentPage.startsWith("company-") && href === "companies.html";
  const isCategoryDetail = currentPage === "detail.html" && href === "products.html";
  if (href === currentPage || isCompanyDetail || isCategoryDetail) {
    link.classList.add("is-active");
  }
});

const tabs = document.querySelectorAll("[data-company-tab]");
const panels = document.querySelectorAll("[data-company-panel]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const activeId = tab.dataset.companyTab;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.companyPanel === activeId;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
  });
});

document.querySelectorAll("[data-detail-link]").forEach((node) => {
  node.classList.add("is-detail-link");
  node.setAttribute("tabindex", "0");
  node.setAttribute("role", "link");

  const openDetail = () => {
    const slug = node.dataset.detailLink;
    if (slug) {
      window.location.href = `detail.html?item=${encodeURIComponent(slug)}`;
    }
  };

  node.addEventListener("click", openDetail);
  node.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetail();
    }
  });
});

if (currentPage === "detail.html" && window.detailPageData) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("item");
  const detail = window.detailPageData[slug];

  if (detail) {
    document.title = `${detail.title} | B NOSHA & SOLIANA`;

    document.getElementById("detail-eyebrow").textContent = detail.eyebrow;
    document.getElementById("detail-title").textContent = detail.title;
    document.getElementById("detail-intro").textContent = detail.intro;
    document.getElementById("detail-badge").textContent = detail.eyebrow;
    document.getElementById("detail-image").src = detail.image;
    document.getElementById("detail-image").alt = detail.title;
    document.getElementById("detail-summary-title").textContent = detail.title;
    document.getElementById("detail-summary").textContent = detail.summary;

    const points = document.getElementById("detail-points");
    points.innerHTML = "";

    detail.points.forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      points.appendChild(item);
    });
  }
}

initializeLanguageSwitcher();
