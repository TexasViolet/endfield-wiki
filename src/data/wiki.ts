export type Element = "灼热" | "寒冷" | "电磁" | "自然" | "物理";
export type WeaponType = "单手剑" | "双手剑" | "长柄武器" | "手铳" | "施术单元";

export interface Operator {
  name: string;
  rarity: 4 | 5 | 6;
  element: Element;
  weapon: WeaponType;
  role: string;
  faction: string;
  race?: string;
  desc: string;
  hot?: boolean;
}

export const ELEMENT_COLOR: Record<Element, string> = {
  灼热: "#ff6b3d",
  寒冷: "#6fc3ff",
  电磁: "#ffd23d",
  自然: "#7ddb6a",
  物理: "#e8e6e1",
};

export const operators: Operator[] = [
  { name: "余烬", rarity: 6, element: "灼热", weapon: "双手剑", role: "重装", faction: "铁誓军", race: "萨科塔", desc: "余烬是一名使用双手剑的重装干员，可造成灼热属性的伤害。" },
  { name: "洁尔佩塔", rarity: 6, element: "自然", weapon: "施术单元", role: "辅助", faction: "罗德岛", race: "沃尔珀", desc: "洁尔佩塔是一名使用施术单元的辅助干员，可造成自然属性的伤害。" },
  { name: "管理员", rarity: 6, element: "物理", weapon: "单手剑", role: "近卫", faction: "终末地工业", hot: true, desc: "管理员是一名使用单手剑的近卫干员，可造成物理属性的伤害。" },
  { name: "提弗洛斯", rarity: 6, element: "自然", weapon: "施术单元", role: "突击", faction: "罗德岛", race: "萨卡兹", hot: true, desc: "「跟随她的脚步，洞见萨米维格的启示，深入荒野。」依靠其他干员的物理和法术效果，从而提供决定性的伤害输出能力。" },
  { name: "梨诺", rarity: 6, element: "电磁", weapon: "长柄武器", role: "辅助", faction: "环塔商会", race: "萨卡兹", desc: "「当你抬头时，她总是夜空中最璀璨的那颗星。」擅长以各类控制效果削弱敌人，也能为其他干员提供增益和支援。" },
  { name: "骏卫", rarity: 6, element: "物理", weapon: "单手剑", role: "先锋", faction: "罗德岛", race: "黎博利", desc: "骏卫是一名使用单手剑的先锋干员，可造成物理属性的伤害。" },
  { name: "黎风", rarity: 6, element: "物理", weapon: "长柄武器", role: "近卫", faction: "宏山科学院", race: "阿纳萨", desc: "黎风是一名使用长柄武器的近卫干员，可造成物理属性的伤害。" },
  { name: "莱万汀", rarity: 6, element: "灼热", weapon: "单手剑", role: "突击", faction: "罗德岛", race: "萨卡兹", desc: "莱万汀是一名使用单手剑的突击干员，可造成灼热属性的伤害。" },
  { name: "卡缪", rarity: 6, element: "灼热", weapon: "长柄武器", role: "先锋", faction: "塞什卡", race: "萨卡兹", desc: "「凡你所在之处，他的血与你同在。」擅长恢复技力，能帮助团队后续更好地施放技能。" },
  { name: "伊冯", rarity: 6, element: "寒冷", weapon: "手铳", role: "突击", faction: "终末地工业", race: "瓦伊凡", hot: true, desc: "伊冯是一名使用手铳的术师干员，可造成寒冷属性的伤害。" },
  { name: "艾尔黛拉", rarity: 6, element: "自然", weapon: "施术单元", role: "辅助", faction: "罗德岛", race: "卡普里尼", desc: "艾尔黛拉是一名使用施术单元的辅助干员，可造成自然属性的伤害。" },
  { name: "别礼", rarity: 6, element: "寒冷", weapon: "双手剑", role: "突击", faction: "塞什卡", race: "萨卡兹", desc: "别礼是一名使用双手剑的突击干员，可造成寒冷属性的伤害。" },
  { name: "庄方宜", rarity: 6, element: "电磁", weapon: "施术单元", role: "突击", faction: "宏山科学院", race: "麒麟", desc: "庄方宜是一名使用施术单元的突击干员，可造成电磁属性的伤害。" },
  { name: "汤汤", rarity: 6, element: "寒冷", weapon: "手铳", role: "术师", faction: "终末地工业", race: "菲林", desc: "汤汤是一名使用手铳的术师干员，可造成寒冷属性的伤害。" },
  { name: "洛茜", rarity: 6, element: "物理", weapon: "单手剑", role: "近卫", faction: "终末地工业", race: "鲁珀", desc: "洛茜是一名使用单手剑的近卫干员，可造成物理属性的伤害。" },
  { name: "弭弗", rarity: 6, element: "物理", weapon: "双手剑", role: "近卫", faction: "宏山科学院", race: "萨卡兹", desc: "「你的安全已成为她职责的一部分。」擅长造成破防和物理异常，同时兼具一定的伤害输出能力。" },
  { name: "诀", rarity: 6, element: "自然", weapon: "施术单元", role: "术师", faction: "宏山科学院", race: "黎博利", desc: "「那只从不停歇的羽兽，寻得了落脚的枝丫。」擅长造成法术附着和法术异常，同时兼具一定的伤害输出能力。" },
  { name: "佩丽卡", rarity: 5, element: "电磁", weapon: "施术单元", role: "术师", faction: "终末地工业", race: "黎博利", desc: "佩丽卡是一名使用施术单元的术师干员，可造成电磁属性的伤害。" },
  { name: "陈千语", rarity: 5, element: "物理", weapon: "单手剑", role: "近卫", faction: "终末地工业", race: "龙", desc: "陈千语是一名使用单手剑的近卫干员，可造成物理属性的伤害。" },
  { name: "狼卫", rarity: 5, element: "灼热", weapon: "手铳", role: "术师", faction: "终末地工业", race: "鲁珀", desc: "狼卫是一名使用手铳的术师干员，可造成灼热属性的伤害。" },
  { name: "弧光", rarity: 5, element: "电磁", weapon: "单手剑", role: "先锋", faction: "众生长地", race: "库兰塔", desc: "弧光是一名使用单手剑的先锋干员，可造成电磁属性的伤害。" },
  { name: "赛希", rarity: 5, element: "寒冷", weapon: "施术单元", role: "辅助", faction: "寂语修会", race: "萨卡兹", desc: "赛希是一名使用施术单元的辅助干员，可造成寒冷属性的伤害。" },
  { name: "艾维文娜", rarity: 5, element: "电磁", weapon: "长柄武器", role: "突击", faction: "环塔商会", race: "卡特斯", desc: "艾维文娜是一名使用长柄武器的突击干员，可造成电磁属性的伤害。" },
  { name: "昼雪", rarity: 5, element: "寒冷", weapon: "双手剑", role: "重装", faction: "罗德岛", race: "乌萨斯", desc: "昼雪是一名使用双手剑的重装干员，可造成寒冷属性的伤害。" },
  { name: "大潘", rarity: 5, element: "物理", weapon: "双手剑", role: "突击", faction: "宏山科学院", race: "乌萨斯", desc: "大潘是一名使用双手剑的突击干员，可造成物理属性的伤害。" },
  { name: "阿列什", rarity: 5, element: "寒冷", weapon: "单手剑", role: "先锋", faction: "联盟工团", race: "阿纳缇", desc: "阿列什是一名使用单手剑的先锋干员，可造成寒冷属性的伤害。" },
  { name: "噗切娜", rarity: 5, element: "物理", weapon: "单手剑", role: "重装", faction: "环塔商会", race: "菲林", hot: true, desc: "环塔商会阵营的菲林族重装干员，可为全队提供伤害减免、抗打断与治疗支援。参与「我们的大菲林！来袭！」活动即可免费获取满潜干员与专属武器。" },
  { name: "安塔尔", rarity: 4, element: "电磁", weapon: "施术单元", role: "辅助", faction: "终末地工业", race: "萨弗拉", desc: "安塔尔是一名使用施术单元的辅助干员，可造成电磁属性的伤害。" },
  { name: "秋栗", rarity: 4, element: "灼热", weapon: "单手剑", role: "先锋", faction: "终末地工业", race: "佩洛", desc: "秋栗是一名使用单手剑的先锋干员，可造成灼热属性的伤害。" },
  { name: "卡契尔", rarity: 4, element: "物理", weapon: "双手剑", role: "重装", faction: "终末地工业", race: "佩洛", desc: "卡契尔是一名使用双手剑的重装干员，可造成物理属性的伤害。" },
  { name: "埃特拉", rarity: 4, element: "寒冷", weapon: "长柄武器", role: "近卫", faction: "终末地工业", race: "菲林", desc: "埃特拉是一名使用长柄武器的近卫干员，可造成寒冷属性的伤害。" },
  { name: "萤石", rarity: 4, element: "自然", weapon: "手铳", role: "术师", faction: "终末地工业", race: "斐迪亚", desc: "萤石是一名使用手铳的术师干员，可造成自然属性的伤害。" },
];

export interface Weapon {
  name: string;
  en: string;
  type: WeaponType;
  rarity: 3 | 4 | 5 | 6;
  version: string;
  updated: string;
  desc: string;
  hot?: boolean;
}

export const weapons: Weapon[] = [
  { name: "寒夜幽影", en: "Umbra of Frigid Eventide", type: "施术单元", rarity: 6, version: "1.5", updated: "2026-09-02", hot: true, desc: "熔炉要塞铸造的武器之一。造型简洁流畅，特殊的镀层适用于昏暗环境隐蔽作战。提弗洛斯的专属武器，随「冬猎」特许寻访同期概率提升。" },
  { name: "四二式·肃阵", en: "Type 42: Solemn Phalanx", type: "施术单元", rarity: 6, version: "1.4", updated: "2026-09-02", desc: "宏山选剑局研发的制式施术单元，应龙特勤队的现役装备之一。拥有优异的稳定性与功能性，能够适应严苛的环境。诀的专属武器。" },
  { name: "曜夜的首演", en: "Bedazzling Night Debut", type: "长柄武器", rarity: 6, version: "1.4", updated: "2026-09-02", desc: "梅什科工业专为流行艺术家定制的高端线产品。梦幻张扬的麦克风造型搭配意外强劲的性能，让不少试用者都印象深刻。梨诺的专属武器。" },
  { name: "镀红祝福", en: "Blessing of Lustrous Carmine", type: "长柄武器", rarity: 6, version: "1.3", updated: "2026-09-02", desc: "巫术时刻发行的长枪之一。在塞什卡开放日上推出的特别纪念款，枪身采用了特殊的镀层工艺，兼具实用性与美学价值。卡缪的专属武器。" },
  { name: "扶摇", en: "Rapid Ascent", type: "单手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "宏山选剑局的高端佩剑产品，用于表彰有突出贡献的人士，命名由宏科院内部征集确定。" },
  { name: "不知归", en: "Never Rest", type: "单手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "熔炉要塞锻造的武器之一。即使经过反复重铸，锋芒内敛，却依旧蕴含迫人威势。" },
  { name: "白夜新星", en: "White Night Nova", type: "单手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "熔炉要塞铸造的武器之一。剑柄采用了拉丝设计，增加阻尼，握持感优良。剑身取自荒原上的稀有矿石。" },
  { name: "光荣记忆", en: "Glorious Memory", type: "单手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "熔炉要塞铸造的武器之一。造型典雅精致，常用于铁誓军的仪式场合而非前线搏杀，剑身经多重精磨，刃口锋锐至极。" },
  { name: "熔铸火焰", en: "Forgeborn Scathe", type: "单手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "巫术时刻锻铸的锋利兵刃之一。特殊精炼使得剑身泛红，施术单元采取独特的液化源石方案，仿佛是熔炉中流下的一滴血泪。" },
  { name: "显赫声名", en: "Eminent Repute", type: "单手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "梅什科工业推出的高品质佩剑，深受环塔商会上流人士的青睐。精细雕琢的外表下，性能同样值得信赖。" },
  { name: "狼之绯", en: "Lupine Scarlet", type: "单手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "雷神工业生产的热销款长剑，经黑市渠道行销文明环带之外，在裂地者中颇受欢迎，不少人都会为它增加特殊改装模块。" },
  { name: "热熔切割器", en: "Thermite Cutter", type: "单手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "北进重工支援所“开拓者”系列的基础产品。四型热熔切割器采用专利高温材料，切割性能强劲，受到工程人员广泛好评。" },
  { name: "宏愿", en: "Grand Vision", type: "单手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的优质武器，极具创意地将实验型源石材料作为剑身主体，使其拥有了极佳的能量传导性能。" },
  { name: "黯色火炬", en: "Umbral Torch", type: "单手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "雷神工业推出的新一代轻量化武器。整个剑身均采用特制的合成金属作为材料。深受“专业人士”青睐。" },
  { name: "使命必达", en: "Delivery Guaranteed", type: "施术单元", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "雷神工业的经典尖端产品，其原型从第一次天使战争时便投入使用。该产品不断迭代至今，强大的火力意味着安全与保障。" },
  { name: "爆破单元", en: "Detonation Unit", type: "施术单元", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "北进重工支援所开发的施术单元，拥有毫无争议的最佳源石技艺传导性。只有最强壮的使用者才能驾驭这一产品。" },
  { name: "骑士精神", en: "Chivalric Virtues", type: "施术单元", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "梅什科工业研发的施术单元之一。选用特制D64钢壳，配多款定制模块。这款产品让人联想起昔日竞技场的烟火秀。" },
  { name: "作品：蚀迹", en: "Opus: Etch Figure", type: "施术单元", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "轻超域技术实验室签约作品。艺术家亲手錾刻的金属器件与冰碛岩的纹理缀合，形成独一无二的施术回路。" },
  { name: "遗忘", en: "Oblivion", type: "施术单元", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "巫术时刻研发的施术单元之一。除了基本源石线路外，一切材质不明。这真的是可以在塔卫二造出来的东西吗？" },
  { name: "沧溟星梦", en: "Dreams of the Starry Beach", type: "施术单元", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "梅什科工业的高端线产品之一。优秀的源石技艺传导性让它不像其他时髦产品那样华而不实。" },
  { name: "孤舟", en: "Lone Barge", type: "施术单元", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "宏山选剑局研发的施术单元。大胆采用了与息壤相结合的新型材料，优秀的性能可以大幅提高施术效能，但对使用者而言也有着一定的门槛。" },
  { name: "雾中微光", en: "Flickers in the Mist", type: "施术单元", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "终末地工业的经典产品，在极点远征时期大量投入使用。金黄色涂装十分醒目，在漫天暴雪中都清晰可见。" },
  { name: "典范", en: "Exemplar", type: "双手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "梅什科工业最新推出的独立产品。据传这款设计源于寂语修会的发掘产物，内含绝密技术，分金裂石，无坚不摧。" },
  { name: "昔日精品", en: "Former Finery", type: "双手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "北进重工支援所的高端产品。一款采用旧技术设计的链式切割器，目前已不再大规模生产，但设计依然可靠。" },
  { name: "大雷斑", en: "Thunderberge", type: "双手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的特别装备之一。焰形剑搭配的交错式源石线路能提高基质效率。灵感来于观测到的塔罗斯现象。" },
  { name: "破碎君王", en: "Sundered Prince", type: "双手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "巫术时刻限量发行的特殊武器之一，似乎是依循着什么古老传说打造的外形，仿佛能捕捉梦境中的呻吟。" },
  { name: "赫拉芬格", en: "Khravengger", type: "双手剑", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "巫术时刻推出的古怪武器之一。刀身由寻常的冰块打造，但表面附着的奇特源石技艺让其变得坚不可摧。" },
  { name: "骁勇", en: "Valiant", type: "长柄武器", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "梅什科工业的中端线产品之一。复古的巨箭型设计以及不俗的实战实用性，使其至今仍有市无价。" },
  { name: "负山", en: "Mountain Bearer", type: "长柄武器", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "宏山选剑局研发的实验型长枪。枪杆部位在铸造时混入了极特殊的金合金，在保证强度的同时极大提高了韧性。" },
  { name: "J.E.T.", en: "JET", type: "长柄武器", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "北进重工支援所的实验型高级产品，原型由其已解散的航空器研究中心设计。它载有源石增压喷射器，性能惊人。" },
  { name: "艺术暴君", en: "Artzy Tyrannical", type: "手铳", rarity: 6, version: "1.2", updated: "2026-04-17", hot: true, desc: "梅什科工业大胆推出的艺术家联名系列中最受欢迎的产品之一。充满个性的造型匹配狂暴的性能，在二级市场的溢价足以证明它的人气。" },
  { name: "楔子", en: "Wedge", type: "手铳", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "北进重工支援所的传奇产品。完美体现北进重工的风格：强大的破坏力、绝对的可靠性，以及令人头疼的操作性。" },
  { name: "同类相食", en: "Clannibal", type: "手铳", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "雷神工业制造的特殊铳械，使用难度极高。因为是实验型武器，所以仅在市场上投放了少量样品。" },
  { name: "望乡", en: "Home Longing", type: "手铳", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "宏山选剑局研发的铳械。为贴合宏科院武装力量的基本方针，在设计时特别减轻了重量，优化了持握手感。" },
  { name: "领航者", en: "Navigator", type: "手铳", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "梅什科工业年度概念新品，以此致敬带领我们踏上塔卫二无垠旅途的领航者。" },
  { name: "落草", en: "Brigand's Calling", type: "手铳", rarity: 6, version: "1.2", updated: "2026-04-17", desc: "宏山选剑局研发的铳械。设计简单，用料扎实，携带轻便，能适应多种复杂环境。" },
  { name: "仰止", en: "Aspirant", type: "单手剑", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "宏山选剑局推出的上等武器，是其所有产品中较受市场欢迎的一款，在荒地上亦有不少仿品。" },
  { name: "O.B.J.轻芒", en: "OBJ Edge of Lightness", type: "单手剑", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "终末地工业出品的系列制式装备。由资深武库工程师奥佩罗所组建的原型创意组设计。剑柄配有可拆卸的辅助配件。" },
  { name: "十二问", en: "Twelve Questions", type: "单手剑", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "产自荒野的锋利长剑。不同的武器工匠在这类武器上缠裹饰品的方式截然不同。" },
  { name: "钢铁余音", en: "Sundering Steel", type: "单手剑", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的干员高级装备之一。握柄与护手采用一体化设计，应力充能机构储存动能，提高武器的杀伤力。" },
  { name: "坚城铸造者", en: "Fortmaker", type: "单手剑", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "熔炉要塞铸造的武器之一。旧式的结构设计使其坚实耐用，厚重的剑躯随着战线的推移在冻土上留下了无数痕迹。" },
  { name: "逐鳞3.0", en: "Finchaser 3.0", type: "单手剑", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "北进重工支援所“户外探索”系列的旗舰产品。因其亲近自然的设计理念和便携的功能性，受到许多探险家与捕鳞爱好者的强烈推荐。" },
  { name: "迷失荒野", en: "Wild Wanderer", type: "施术单元", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "雷神工业研发的一款施术单元，以简洁和轻量著称。其材料用量不足普通施术单元的一半。" },
  { name: "悼亡诗", en: "Stanza of Memorials", type: "施术单元", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "巫术时刻推出的古怪施术单元之一。反直觉地削弱了源石技艺的适应性，只为强调古老提卡兹巫术的黑暗逻辑。" },
  { name: "莫奈何", en: "Monaihe", type: "施术单元", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "宏山选剑局研发的施术单元，采用了珍贵的息壤材料。因其材料特性，使用者必须具备极高的操控准确度。" },
  { name: "布道自由", en: "Freedom to Proselytize", type: "施术单元", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "梅什科工业为寂语修会定制的施术单元。该产品从设计、验证到落地生产和调试都在寂语修会修士的指导建议下完成。" },
  { name: "O.B.J.术识", en: "OBJ Arts Identifier", type: "施术单元", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "终末地工业出品的系列制式装备。由资深武库工程师奥佩罗所组建的原型创意组设计。功率取决于使用者的源石技艺水平。" },
  { name: "探骊", en: "Seeker of Dark Lung", type: "双手剑", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "宏山选剑局研发的制式大剑。剑身使用了新型特种涂料，防护能力优良，即使处于极端恶劣环境下也能免受影响。" },
  { name: "终点之声", en: "Finishing Call", type: "双手剑", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "梅什科工业小规模生产的特别产品。本品是梅什科工业与骑士竞技专家克伦威尔合作系列的最后一款设计。" },
  { name: "古渠", en: "Ancient Canal", type: "双手剑", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "宏山选剑局制造的优质大剑。较之同类产品，它更轻盈，但杀伤力却没有降低分毫。" },
  { name: "O.B.J.重荷", en: "OBJ Heavy Burden", type: "双手剑", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "终末地工业出品的系列制式装备。由资深武库工程师奥佩罗所组建的原型创意组设计。可根据实战需求，装配不同的模块套件。" },
  { name: "O.B.J.尖峰", en: "OBJ Razorhorn", type: "长柄武器", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "终末地工业出品的系列制式装备。由资深武库工程师奥佩罗所组建的原型创意组设计。使用者可自由调整枪尖的组件。" },
  { name: "嵌合正义", en: "Chimeric Justice", type: "长柄武器", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "终末地工业设计的实验型长枪，实际投产量较少，为了适应复杂多变的战场而采用了便于拆卸拼接的模块化设计。" },
  { name: "向心之引", en: "Cohesive Traction", type: "长柄武器", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "雷神工业客制化产品线的经典案例。在军用刺枪形制的基础上，增添了多样化的特殊功能和个人化的美学设计。" },
  { name: "理性告别", en: "Rational Farewell", type: "手铳", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "雷神工业为支持人类对外探索而设计生产的高能型铳械，具有较强的环境适应能力，是大多探索者的标配武器。" },
  { name: "作品：众生", en: "Opus: The Living", type: "手铳", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "轻超域技术实验室受托定制作品。艺术家大胆地使用遗迹残石包覆铳膛，并在残石上刻下了特殊的脉络。" },
  { name: "O.B.J.迅极", en: "OBJ Velocitous", type: "手铳", rarity: 5, version: "1.2", updated: "2026-04-17", desc: "终末地工业出品的系列制式装备。由资深武库工程师奥佩罗所组建的原型创意组设计。采用轻量材质，扎实耐用。" },
  { name: "显锋", en: "Prominent Edge", type: "单手剑", rarity: 4, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的干员进阶装备之一。简洁的模块化构造带来了轻盈平衡的握持体验，剑刃耐用性十足。" },
  { name: "浪潮", en: "Wave Tide", type: "单手剑", rarity: 4, version: "1.2", updated: "2026-04-17", desc: "梅什科工业的中端产品之一。潮流新锐的造型，惊人的性价比，使其成为环塔商会的时尚消费新宠。" },
  { name: "全自动骇新星", en: "Hypernova Auto", type: "施术单元", rarity: 4, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的干员进阶装备之一。武库沿用了安德烈的设计方案，可预存储术式，在紧急情况下快速传导法术。" },
  { name: "荧光雷羽", en: "Fluorescent Roc", type: "施术单元", rarity: 4, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的施术单元之一。结构大胆，传导性强，难以驾驭。许多干员将熟练使用它当作小有所成的证明。" },
  { name: "工业零点一", en: "Industry 0.1", type: "双手剑", rarity: 4, version: "1.2", updated: "2026-04-17", desc: "在开拓区常见的一种武器类型，基础设计已难以追溯。这种武器制造工艺并不复杂，常见工业设备都可生产。" },
  { name: "淬火者", en: "Quencher", type: "双手剑", rarity: 4, version: "1.2", updated: "2026-04-17", desc: "熔炉要塞出品的制式大剑。虽然精通者寥寥，但由于上手十分简单，历来是新兵的入门武器首选。" },
  { name: "天使杀手", en: "Aggeloslayer", type: "长柄武器", rarity: 4, version: "1.2", updated: "2026-04-17", desc: "熔炉要塞为铁誓军基层士兵生产的制式长枪。以锋利著称，专为克制天使而设计。" },
  { name: "寻路者道标", en: "Pathfinder's Beacon", type: "长柄武器", rarity: 4, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的干员进阶装备之一。造型简洁，携行轻便，平衡性优良，令人想起罗德岛先锋干员的制式长枪。" },
  { name: "呼啸守卫", en: "Howling Guard", type: "手铳", rarity: 4, version: "1.2", updated: "2026-04-17", desc: "梅什科工业推出的中端产品之一。复古拉特兰结构与现代工业结构的完美融合，蓝色漆面金属勾勒出独特的审美。" },
  { name: "长路", en: "Long Road", type: "手铳", rarity: 4, version: "1.2", updated: "2026-04-17", desc: "熔炉要塞为铁誓军基层士兵生产的制式铳械，因其结构简单，输出功率高而备受欢迎。" },
  { name: "塔尔11", en: "Tarr 11", type: "单手剑", rarity: 3, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的干员基础装备之一。由武库工程师塔尔负责设计。它是许多外勤干员的第一把武器。" },
  { name: "吉米尼12", en: "Jiminy 12", type: "施术单元", rarity: 3, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的干员基础装备之一。由武库工程师吉米尼负责设计。这款施术单元格外受新进干员喜爱。" },
  { name: "达尔霍夫7", en: "Darhoff 7", type: "双手剑", rarity: 3, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的干员基础装备之一。由武库工程师达尔霍夫负责设计。该设计为攻坚任务提供装备选择。" },
  { name: "奥佩罗77", en: "Opero 77", type: "长柄武器", rarity: 3, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的干员基础装备之一。由资深武库工程师奥佩罗亲自设计。其舒适的握持感令新进干员也能运用自如。" },
  { name: "佩科5", en: "Peco 5", type: "手铳", rarity: 3, version: "1.2", updated: "2026-04-17", desc: "终末地工业制造的干员基础装备之一。由武库工程师佩科负责设计。蚀刻弹药与铳械不再只属于萨科塔。" },
];

export interface NavCategory {
  title: string;
  en: string;
  desc: string;
  icon: string; // svg path key
  count: string;
}

export const categories: NavCategory[] = [
  { title: "干员图鉴", en: "OPERATORS", desc: "全干员属性·技能·档案", icon: "operators", count: "32+" },
  { title: "武器图鉴", en: "WEAPONS", desc: "五类武器一览与考据", icon: "weapons", count: "72" },
  { title: "装备图鉴", en: "GEARS", desc: "套装效果与词条推荐", icon: "gears", count: "80+" },
  { title: "设备图鉴", en: "FACILITIES", desc: "集成工业系统设备一览", icon: "facilities", count: "60+" },
  { title: "物品图鉴", en: "ITEMS", desc: "素材·消耗品·贵重物", icon: "items", count: "200+" },
  { title: "敌对图鉴", en: "ENEMIES", desc: "天使与构装体图鉴", icon: "enemies", count: "70+" },
  { title: "中枢档案", en: "NEXUS ARCHIVES", desc: "塔卫二中枢数据库官方档案", icon: "archives", count: "61" },
  { title: "探索地图", en: "WORLD MAP", desc: "武陵城·景玉谷·四号谷地", icon: "map", count: "4+" },
];

export const lore = [
  {
    title: "塔卫二",
    en: "TALOS-II",
    body: "与泰拉同源的异星世界。天灾横行、危机遍布，延展到天际的荒野与无人区等待被刻上新文明的印记。源石侵蚀曾令文明衰退，如今聚居地只能在高墙之内存续。",
  },
  {
    title: "终末地工业",
    en: "ENDFIELD INDUSTRIES",
    body: "塔卫二最著名的技术承包商与开拓者。以源石发动机、全自动建造设备和集成工业生产线为根基，致力于回收失落技术，为人类开拓新的边疆。",
  },
  {
    title: "协议回收部门",
    en: "PROTOCOL RECOVERY DEPT.",
    body: "终末地工业曾经的核心部门，负责探索旧时代遗迹、回收并逆向处理协议技术。数年前的「意外冲突」摧毁了其中央基地，如今在监督佩丽卡的带领下重建。",
  },
  {
    title: "自动化集成工业系统",
    en: "AIC SYSTEM",
    body: "由终末地工程中心整合原型设备研发的系统，可通过传送技术在荒地快速部署供能与生产设施，是开拓荒地的工业基础。",
  },
  {
    title: "侵蚀与天使",
    en: "CORRUPTION & ANGELS",
    body: "「侵蚀」灾害与构装体生物「天使」是塔卫二最大的威胁。它们游荡于荒野与遗迹之间，守卫着失落文明的秘密。",
  },
  {
    title: "管理员",
    en: "ENDMINISTRATOR",
    body: "终末地工业的核心与秘密。曾多次在塔卫二发生重大变故时挺身而出，外界仅知这张「底牌」的存在，而对其真容一无所知。",
  },
];

export const news = [
  { date: "2026-09-02", tag: "干员", title: "「雪凇幽梦」1.5版本新干员：六星提弗洛斯登场，五星噗切娜登录即送" },
  { date: "2026-08-18", tag: "干员", title: "新增干员档案：陈千语·档案资料四已录入" },
  { date: "2026-08-02", tag: "考据", title: "陈氏家族考据更新：陈千语与陈晖洁关系梳理" },
  { date: "2026-07-19", tag: "攻略", title: "武陵城仓储与基建指南：360/分钟源矿产线配置" },
  { date: "2026-05-29", tag: "世界观", title: "塔卫二设定问答合集上线，含竞赛题库解析" },
  { date: "2026-04-03", tag: "站点", title: "干员一览页面重构，新增元素筛选功能" },
  { date: "2026-01-22", tag: "公告", title: "《明日方舟：终末地》全平台公测开启" },
];

export const factions = ["全部", "终末地工业", "罗德岛", "宏山科学院", "环塔商会", "塞什卡", "铁誓军", "联盟工团", "寂语修会", "众生长地"];
export const elements: ("全部" | Element)[] = ["全部", "灼热", "寒冷", "电磁", "自然", "物理"];
export const weaponTypes: ("全部" | WeaponType)[] = ["全部", "单手剑", "双手剑", "长柄武器", "手铳", "施术单元"];
