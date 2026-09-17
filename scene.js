// ─── DARKHOST 3D SHOWROOM (Enterprise + 40-House Neighborhood + Smooth Moving Car) ───

// Data for the 6 enterprise zones
// Six zones — one per CRM role (staff_users.role): receptionist («оператор»), washer, packer, driver, manager, owner.
// Text follows what each role can actually do in the product (role gates in api/internal/*).
const ZONES_DATA = [
  {
    id: "operator",
    category: "operator",
    title: "Оператор",
    subtitle: "Приёмный пункт и диспетчерская · роль receptionist",
    description:
      "Оператор оформляет заказ на стойке: заводит клиента, выбирает «Курьер заберёт» или «Клиент принесёт сам», ставит дату выдачи. С доски цеха отправляет водителя на забор и выдаёт готовые заказы. Цены, состав заказа и наличные при выдаче — только менеджер или владелец.",
    crmHref: "../web",
    crmActionLabel: "Открыть заказы",
    features: [
      "Новый заказ и карточка клиента, заявка на скидку владельцу",
      "Курьер или самовывоз, перенос даты выдачи",
      "Доска цеха: отправить водителя на забор",
      "Звонки клиентам, SMS-статусы, перенос сроков",
    ],
    connectedModules: ["Заказы", "Новый заказ", "Клиенты", "Доска цеха", "Выдача", "Календарь", "SMS клиентам"],
    cameraTarget: new THREE.Vector3(-6.4, 1.25, 1.4),
    cameraPosition: new THREE.Vector3(-2.8, 2.5, 5.5),
    hotspotPosition: new THREE.Vector3(-6.4, 4.3, 1.4),
    badgeText: "Оператор",
  },
  {
    id: "washer",
    category: "washer",
    title: "Мойщик",
    subtitle: "Мокрая зона цеха · роль washer",
    description:
      "Мойщик видит одну доску: вещи, которые ждут мойки. На каждой — две кнопки: «В мойку» (приёмка → мойка) и «Мойка закончена» (мойка → сушка). Больше мойщику ничего не показывается — ни заказов, ни цен.",
    crmHref: "../web",
    crmActionLabel: "Открыть доску мойки",
    features: [
      "Доска мойки: все вещи всех заказов одним списком",
      "«В мойку» → стадия Мойка, «Мойка закончена» → Сушка",
      "Линия мойки, центрифуга, отжим, стиральные машины, сушка",
      "Вход в приложение по SMS-коду",
    ],
    connectedModules: ["Приложение мойщика", "Стадии: Ожидает мойки · В мойке · На сушке", "Мониторинг цеха"],
    cameraTarget: new THREE.Vector3(-8.5, 1.3, -6.5),
    cameraPosition: new THREE.Vector3(-5.2, 3.4, -2.6),
    hotspotPosition: new THREE.Vector3(-8.5, 4.4, -6.5),
    badgeText: "Мойщик",
  },
  {
    id: "packer",
    category: "packer",
    title: "Упаковщик",
    subtitle: "Приёмка, замер и упаковка · роль packer",
    description:
      "Упаковщик принимает мешок от водителя и делит его на вещи с бирками, замеряет ковры (при превышении порога заказ уходит клиенту на согласование), после сушки принимает вещи на упаковку и отмечает «Упаковано». Он же выдаёт самовывоз и возвращает брак в мойку.",
    crmHref: "../web",
    crmActionLabel: "Открыть доску упаковки",
    features: [
      "Разделение мешка на вещи, замер и согласование с клиентом",
      "«Принять на упаковку» → «Упаковано» (с фото «после»)",
      "Возврат в мойку, «вещи нет», безымянные изделия",
      "Выдача самовывоза и передача курьеру",
    ],
    connectedModules: ["Приложение упаковщика", "Приём партии", "Безымянные изделия", "Претензии о порче", "Ожидают подтверждения", "Выдача"],
    cameraTarget: new THREE.Vector3(0.6, 1.2, -6.0),
    cameraPosition: new THREE.Vector3(3.4, 3.4, -2.4),
    hotspotPosition: new THREE.Vector3(0.6, 4.4, -6.0),
    badgeText: "Упаковщик",
  },
  {
    id: "driver",
    category: "driver",
    title: "Водитель",
    subtitle: "Комната водителей, доки и маршруты · роль driver",
    description:
      "Водитель начинает смену в приложении и едет по точкам маршрута: у двери клиента создаёт мешок и добавляет вещи, привозит их в цех, готовые заказы доставляет обратно с фото подписи и принимает наличные. В конце смены сдаёт кассу менеджеру.",
    crmHref: "../web",
    crmActionLabel: "Открыть маршруты",
    features: [
      "Смена: «Начать смену» → маршрут → «Завершение смены»",
      "Мешок и вещи у двери клиента, «клиента нет дома»",
      "Статусы: На маршруте → Забран → В цеху → В пути → Доставлен",
      "Наличные на заборе и доставке, сверка с менеджером",
    ],
    connectedModules: ["Приложение водителя", "Маршруты", "Заявки", "Доставка", "В машине", "История смен"],
    cameraTarget: new THREE.Vector3(-18, 1.3, -6.5),
    cameraPosition: new THREE.Vector3(-18 + 5.5, 5.5, -6.5 + 6.5),
    hotspotPosition: new THREE.Vector3(-18, 4.4, -6.5),
    badgeText: "Водитель",
  },
  {
    id: "manager",
    category: "manager",
    title: "Менеджер",
    subtitle: "Цены, маршруты, касса и люди · роль manager",
    description:
      "Менеджер оценивает вещи и ставит цены, собирает маршруты на день и назначает водителей, сверяет кассу с водителями, решает претензии и безымянные изделия, ведёт табель и зарплату. Видит все отчёты, кроме владельческих.",
    crmHref: "../web",
    crmActionLabel: "Открыть мониторинг",
    features: [
      "Очередь оценки и прайс-лист, изменение состава заказа",
      "Маршруты: планирование, назначение водителя, оптимизация",
      "Касса: сверка с водителями, недобор наличных, расходы",
      "Табель, зарплата, сброс PIN сотрудников",
    ],
    connectedModules: ["Мониторинг", "Очередь оценки", "Прайс-лист", "Маршруты", "Сверка кассы", "Табель", "Зарплата", "Отчёты"],
    cameraTarget: new THREE.Vector3(-30.5, 1.3, -6.5),
    cameraPosition: new THREE.Vector3(-27.0, 2.8, -3.5),
    hotspotPosition: new THREE.Vector3(-30.5, 4.4, -6.5),
    badgeText: "Менеджер",
  },
  {
    id: "owner",
    category: "owner",
    title: "Владелец",
    subtitle: "Кабинет владельца · роль owner",
    description:
      "Владелец видит выручку и журнал событий, утверждает скидки, управляет сотрудниками и их правами по разделам, расходами, SMS-рассылками, тарифом и настройками компании. Всё, что доступно менеджеру, доступно и владельцу.",
    crmHref: "../web",
    crmActionLabel: "Открыть отчёты",
    features: [
      "Выручка, изделия, возвраты, аудит-журнал",
      "Сотрудники и права по разделам, тариф, настройки",
      "Утверждение скидок, расходы, наличные",
      "SMS-рассылки и ассистент по отчётам",
    ],
    connectedModules: ["Выручка", "Сотрудники", "Запросы на скидку", "Расходы", "Рассылки", "Журнал событий", "Тариф", "Настройки"],
    cameraTarget: new THREE.Vector3(-30.0, 1.25, 1.0),
    cameraPosition: new THREE.Vector3(-26.4, 2.6, 5.4),
    hotspotPosition: new THREE.Vector3(-30.0, 4.3, 1.0),
    badgeText: "Владелец",
  },
];

// Initial Overview Camera State (Framing Both Enterprise and the Residential District)
const OVERVIEW_CAMERA = {
  target: new THREE.Vector3(34.0, 0.5, -16.0),
  position: new THREE.Vector3(126, 82, 96),
};

// Application State
let currentZoneIndex = -1;
let targetCameraPos = OVERVIEW_CAMERA.position.clone();
let targetCameraLook = OVERVIEW_CAMERA.target.clone();
let isAnimatingCamera = false;

// ─── THREE.JS INITIALIZATION ────────────────────────────────────────────────
const container = document.getElementById("canvas-container");
const hotspotsContainer = document.getElementById("hotspots-container");

// ─── LOADING SCREEN CONTROLLER ──────────────────────────────────────────────
const loadingScreen = document.getElementById("loading-screen");
const loadingBar = document.getElementById("loadingBar");
const loadingPercent = document.getElementById("loadingPercent");
const loadingError = document.getElementById("loadingError");

function updateLoadingProgress(percent) {
  const p = Math.min(100, Math.max(0, Math.round(percent)));
  if (loadingBar) loadingBar.style.width = p + "%";
  if (loadingPercent) loadingPercent.textContent = p + "%";
}

let isLoadedHidden = false;
function hideLoadingScreen() {
  if (isLoadedHidden) return;
  isLoadedHidden = true;
  updateLoadingProgress(100);
  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add("hidden");
    }
  }, 350);
}

THREE.DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
  if (itemsTotal > 0) {
    const p = (itemsLoaded / itemsTotal) * 100;
    updateLoadingProgress(p);
  }
};

THREE.DefaultLoadingManager.onLoad = function () {
  hideLoadingScreen();
};

THREE.DefaultLoadingManager.onError = function (url) {
  console.warn("Loading asset error:", url);
};

// Fallback in case of cached or network stalls
setTimeout(() => {
  hideLoadingScreen();
}, 7000);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf3eee7);
scene.fog = new THREE.FogExp2(0xf3eee7, 0.0028);

const camera = new THREE.PerspectiveCamera(
  32,
  window.innerWidth / window.innerHeight,
  0.5,
  1000
);
camera.position.copy(OVERVIEW_CAMERA.position);
camera.lookAt(OVERVIEW_CAMERA.target);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
// Shadows are refreshed manually every other frame (see animate) — halves the shadow pass cost
renderer.shadowMap.autoUpdate = false;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputEncoding = THREE.sRGBEncoding;
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2.05; // stays above floor, no underground glitch
controls.minPolarAngle = 0.05; // top-down view allowed
controls.minDistance = 1.2; // can zoom right into desks, monitors, characters
controls.maxDistance = 220;
controls.target.copy(OVERVIEW_CAMERA.target);

// Cancel camera lerping as soon as user starts interacting manually
controls.addEventListener("start", () => {
  isAnimatingCamera = false;
});

// ─── WARM STUDIO LIGHTING ───────────────────────────────────────────────────
const ambientLight = new THREE.AmbientLight(0xffedd5, 0.5);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xcabdae, 0.55);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xfffaed, 1.45);
dirLight.position.set(130, 130, 90);
dirLight.target.position.set(66, 0, -26);
scene.add(dirLight.target);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.near = 5;
dirLight.shadow.camera.far = 220;
const d = 120;
dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;
dirLight.shadow.bias = -0.0004;
dirLight.shadow.normalBias = 0.06;
dirLight.shadow.radius = 3;
scene.add(dirLight);

const fillLight = new THREE.DirectionalLight(0xcfd8dc, 0.35);
fillLight.position.set(-30, 20, -30);
scene.add(fillLight);

// ─── MATERIALS ──────────────────────────────────────────────────────────────
const M = {
  floorBase: new THREE.MeshStandardMaterial({ color: 0xdfd8cb, roughness: 0.85 }),
  floorPavilion: new THREE.MeshStandardMaterial({ color: 0xf4eee4, roughness: 0.7 }),
  floorSuburban: new THREE.MeshStandardMaterial({ color: 0xd8d2c4, roughness: 0.85 }),
  sidewalk: new THREE.MeshStandardMaterial({ color: 0xd6cebf, roughness: 0.8 }),
  road: new THREE.MeshStandardMaterial({ color: 0x2b323c, roughness: 0.75 }),
  roadStripe: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }),
  wallClay: new THREE.MeshStandardMaterial({ color: 0xd6cdbe, roughness: 0.85 }),
  wallTrim: new THREE.MeshStandardMaterial({ color: 0xbaa992, roughness: 0.7 }),

  // Accents
  crimsonRed: new THREE.MeshStandardMaterial({ color: 0xd32f2f, roughness: 0.35 }),
  counterWhite: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }),
  counterWood: new THREE.MeshStandardMaterial({ color: 0xb5804c, roughness: 0.55 }),
  graphite: new THREE.MeshStandardMaterial({ color: 0x263238, roughness: 0.45 }),
  washerTeal: new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.35 }),
  washerCyan: new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.35 }),
  glassCyan: new THREE.MeshStandardMaterial({ color: 0xbfe7fa, roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.32, depthWrite: false }),
  screenGlow: new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 }),
  warmOak: new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.6 }),
  chairTeal: new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.45 }),
  boardWhite: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25 }),
  postomatGrey: new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.4 }),

  // Neighborhood
  lawn: new THREE.MeshStandardMaterial({ color: 0x86a95f, roughness: 0.95 }),
  lawnDark: new THREE.MeshStandardMaterial({ color: 0x6f9450, roughness: 0.95 }),
  driveway: new THREE.MeshStandardMaterial({ color: 0xd3cfc6, roughness: 0.9 }),
  pavers: new THREE.MeshStandardMaterial({ color: 0xb8a992, roughness: 0.9 }),
  stone: new THREE.MeshStandardMaterial({ color: 0x8b8375, roughness: 0.95 }),
  glass: new THREE.MeshStandardMaterial({ color: 0x9fb4c2, roughness: 0.15, metalness: 0.2 }),
  trunk: new THREE.MeshStandardMaterial({ color: 0x6b4f3a, roughness: 0.9 }),
  leaves: new THREE.MeshStandardMaterial({ color: 0x4f8a3d, roughness: 0.9 }),
  leavesLight: new THREE.MeshStandardMaterial({ color: 0x6aa34a, roughness: 0.9 }),
  bush: new THREE.MeshStandardMaterial({ color: 0x5c9a45, roughness: 0.95 }),

  // Parking & Campus Materials
  asphaltParking: new THREE.MeshStandardMaterial({ color: 0x22262d, roughness: 0.8 }),
  curbStone: new THREE.MeshStandardMaterial({ color: 0xc8c3b7, roughness: 0.75 }),
  parkingYellow: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.4 }),
  parkingBlue: new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 }),
  lampPole: new THREE.MeshStandardMaterial({ color: 0x2b323c, roughness: 0.5, metalness: 0.6 }),
  lampGlow: new THREE.MeshStandardMaterial({ color: 0xffedd5, emissive: 0xfbbf24, emissiveIntensity: 1.2 }),
  barrierArm: new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.4 }),
  barrierWhite: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }),
  metalSilver: new THREE.MeshStandardMaterial({ color: 0xd1d5db, roughness: 0.3, metalness: 0.7 }),
  signNavy: new THREE.MeshStandardMaterial({ color: 0x033d53, roughness: 0.3 }),
};

// ─── SCENE BUILDER HELPERS ──────────────────────────────────────────────────
const worldGroup = new THREE.Group();
scene.add(worldGroup);

function createBox(w, h, d, mat, pos, shadow = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  mesh.position.set(pos.x, pos.y, pos.z);
  mesh.castShadow = shadow;
  mesh.receiveShadow = true;
  return mesh;
}

function createCylinder(rt, rb, h, seg, mat, pos, shadow = true) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  mesh.position.set(pos.x, pos.y, pos.z);
  mesh.castShadow = shadow;
  mesh.receiveShadow = true;
  return mesh;
}

// ─── FOUNDATION & ROAD NETWORK ──────────────────────────────────────────────
// Main road at z=12.6, two inner streets, three vertical streets (west / middle / east)
// so delivery vans can loop around each block.
// Roads are 9.6 wide: two 3.4m driving lanes + a 1.4m parking lane on each side.
const WORLD = { xMin: -58, xMax: 158, zMin: -44, zMax: 22 };
const ROAD_W = 12; // one "Road Bits" tile stretched to 12m: two 6m halves (driving lane + parking)
const LANE_OFFSET = 2.4; // driving lane centre from road centre
const PARK_OFFSET = 4.9; // parking lane centre from road centre
const SIDEWALK_W = 1.4;
// Street centrelines are derived so the campus lot keeps its footprint (x -39.8..5.8, z -19.8..6.4)
const MAIN_ROAD_Z = 6.4 + ROAD_W / 2 + SIDEWALK_W;
const STREET_Z = [-19.8 - ROAD_W / 2 - SIDEWALK_W];
const VERT_X = [5.8 + ROAD_W / 2 + SIDEWALK_W, 5.8 + ROAD_W / 2 + SIDEWALK_W + 68, 5.8 + ROAD_W / 2 + SIDEWALK_W + 136];
const WEST_X = -39.8 - ROAD_W / 2 - SIDEWALK_W; // street west of the campus; lets the vans loop through the yard
const CROSS_X = VERT_X[1];
const DISTRICT_X_MIN = 4.3;

const worldW = WORLD.xMax - WORLD.xMin;
const worldCX = (WORLD.xMax + WORLD.xMin) / 2;
const districtW = WORLD.xMax - DISTRICT_X_MIN;
const districtCX = (WORLD.xMax + DISTRICT_X_MIN) / 2;
const districtD = MAIN_ROAD_Z - ROAD_W / 2 - WORLD.zMin;
const districtCZ = (MAIN_ROAD_Z - ROAD_W / 2 + WORLD.zMin) / 2;

worldGroup.add(createBox(worldW, 0.4, WORLD.zMax - WORLD.zMin, M.floorBase, { x: worldCX, y: -0.2, z: (WORLD.zMax + WORLD.zMin) / 2 }));
worldGroup.add(createBox(districtW, 0.41, districtD, M.lawn, { x: districtCX, y: -0.19, z: districtCZ }));

// Roads sit slightly above the lawn platform (top ≈ 0.015) so they stay visible
const ROAD_Y = -0.12; // top at 0.03
const SIDEWALK_Y = -0.11; // top at 0.10
const STRIPE_Y = -0.115; // top at 0.045

// Sidewalks are simple boxes; the asphalt itself is tiled from "Road Bits" (Kay Lousberg, CC0)
function addSidewalksX(z, x0, x1) {
  const w = x1 - x0;
  const cx = (x0 + x1) / 2;
  worldGroup.add(createBox(w, 0.42, SIDEWALK_W, M.sidewalk, { x: cx, y: SIDEWALK_Y, z: z - ROAD_W / 2 - SIDEWALK_W / 2 }, false));
  worldGroup.add(createBox(w, 0.42, SIDEWALK_W, M.sidewalk, { x: cx, y: SIDEWALK_Y, z: z + ROAD_W / 2 + SIDEWALK_W / 2 }, false));
}
function addSidewalksZ(x, z0, z1) {
  const dpt = z1 - z0;
  const cz = (z0 + z1) / 2;
  worldGroup.add(createBox(SIDEWALK_W, 0.42, dpt, M.sidewalk, { x: x - ROAD_W / 2 - SIDEWALK_W / 2, y: SIDEWALK_Y, z: cz }, false));
  worldGroup.add(createBox(SIDEWALK_W, 0.42, dpt, M.sidewalk, { x: x + ROAD_W / 2 + SIDEWALK_W / 2, y: SIDEWALK_Y, z: cz }, false));
}
addSidewalksX(MAIN_ROAD_Z, WORLD.xMin, WORLD.xMax);
addSidewalksX(STREET_Z[0], WEST_X - ROAD_W / 2, VERT_X[2] + ROAD_W / 2);
VERT_X.forEach((x) => addSidewalksZ(x, STREET_Z[0] - ROAD_W / 2, MAIN_ROAD_Z + ROAD_W / 2));
addSidewalksZ(WEST_X, STREET_Z[0] - ROAD_W / 2, MAIN_ROAD_Z + ROAD_W / 2);

// Road tiles. Tile local frame: 2×2 units, straight runs along Z, T-split stem along Z with
// its arm toward +X, corners have arms toward +X and +Z.
const TILE_UNIT = 2;
const TILE_S = ROAD_W / TILE_UNIT;
const TILE_Y = 0.0; // asphalt surface sits at +0.07 inside the tile; curbs at 0.10 (= sidewalk top)
const ROAD_TOP = 0.07;
const roadTiles = {};
// Zebra crossings (centre of every road_straight_crossing tile); pedestrians cross the road only here.
// axis = direction of the road under the zebra: "x" road → people walk along z, "z" road → along x.
const CROSSINGS = [];

function placeTile(name, cx, cz, rotY, stretch = 1, crossing = false) {
  if (crossing) CROSSINGS.push({ x: cx, z: cz, axis: Math.abs(rotY) > 0.1 ? "x" : "z" });
  const t = roadTiles[crossing ? "road_straight_crossing" : name] || roadTiles[name];
  if (!t) return;
  const m = new THREE.Mesh(t.geometry, t.material);
  m.receiveShadow = true;
  m.scale.set(TILE_S, 1, TILE_S * stretch);
  m.rotation.y = rotY;
  m.position.set(cx, TILE_Y, cz);
  worldGroup.add(m);
}

// Straight run between two coordinates; the tile next to a junction becomes a crossing
function tileRun(axis, fixed, from, to, crossingAt = { start: false, end: false }) {
  const len = to - from;
  if (len < 1) return;
  const n = Math.max(1, Math.round(len / ROAD_W));
  const tl = len / n;
  for (let i = 0; i < n; i++) {
    const c = from + tl * (i + 0.5);
    const crossing = n >= 2 && ((i === 0 && crossingAt.start) || (i === n - 1 && crossingAt.end));
    if (axis === "x") placeTile("road_straight", c, fixed, Math.PI / 2, tl / ROAD_W, crossing);
    else placeTile("road_straight", fixed, c, 0, tl / ROAD_W, crossing);
  }
}

function buildRoads() {
  const h = ROAD_W / 2;
  // Main road: straights between the three T-junctions (arm toward -Z / south)
  const mainJ = [WORLD.xMin, WEST_X, ...VERT_X, WORLD.xMax];
  for (let i = 0; i < mainJ.length - 1; i++) {
    const from = i === 0 ? mainJ[0] : mainJ[i] + h;
    const to = i === mainJ.length - 2 ? mainJ[i + 1] : mainJ[i + 1] - h;
    tileRun("x", MAIN_ROAD_Z, from, to, { start: i > 0, end: i < mainJ.length - 2 });
  }
  [WEST_X, ...VERT_X].forEach((x) => placeTile("road_tsplit", x, MAIN_ROAD_Z, Math.PI / 2));

  // Street 1: runs from the west street corner past the campus yard to east
  tileRun("x", STREET_Z[0], WEST_X + h, VERT_X[0] - h, { start: true, end: true });
  for (let i = 0; i < VERT_X.length - 1; i++) {
    tileRun("x", STREET_Z[0], VERT_X[i] + h, VERT_X[i + 1] - h, { start: true, end: true });
  }
  placeTile("road_corner_curved", WEST_X, STREET_Z[0], 0);
  tileRun("z", WEST_X, STREET_Z[0] + h, MAIN_ROAD_Z - h, { start: true, end: true });

  // Connections at VERT_X along Street 1 (T-splits heading south to Main Road, corner on east end)
  placeTile("road_tsplit", VERT_X[0], STREET_Z[0], -Math.PI / 2);
  placeTile("road_tsplit", VERT_X[1], STREET_Z[0], -Math.PI / 2);
  placeTile("road_corner_curved", VERT_X[2], STREET_Z[0], -Math.PI / 2);

  // Vertical streets between Street 1 and Main Road
  VERT_X.forEach((x) => {
    tileRun("z", x, STREET_Z[0] + h, MAIN_ROAD_Z - h, { start: true, end: true });
  });
}

// Shared campus helpers
const shirtMats = [0x0284c7, 0xdb2777, 0xeab308, 0x10b981, 0x8b5cf6, 0xf97316].map(
  (color) => new THREE.MeshStandardMaterial({ color, roughness: 0.8 })
);
function addCampusPlant(x, z) {
  const pot = createCylinder(0.28, 0.22, 0.65, 14, M.counterWhite, { x, y: 0.33, z });
  const plant1 = new THREE.Mesh(new THREE.SphereGeometry(0.55, 9, 7), M.leaves);
  plant1.position.set(x, 0.9, z);
  const plant2 = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 6), M.leavesLight);
  plant2.position.set(x + 0.12, 1.25, z - 0.08);
  plant1.castShadow = plant2.castShadow = true;
  worldGroup.add(pot, plant1, plant2);
}
function buildHeavyDutyWasher(x, z, mat, rotY = 0) {
  const g = new THREE.Group();
  g.add(createBox(1.5, 1.9, 1.45, mat, { x: 0, y: 0.95, z: 0 }));
  g.add(createBox(1.5, 0.28, 1.46, M.graphite, { x: 0, y: 1.75, z: 0 }, false));
  g.add(createBox(0.65, 0.16, 0.05, M.screenGlow, { x: 0, y: 1.76, z: 0.74 }, false));
  const rim = createCylinder(0.48, 0.48, 0.12, 18, M.metalSilver, { x: 0, y: 0.95, z: 0.74 });
  rim.rotation.x = Math.PI / 2;
  const glass = createCylinder(0.38, 0.38, 0.14, 18, M.glassCyan, { x: 0, y: 0.95, z: 0.75 }, false);
  glass.rotation.x = Math.PI / 2;
  g.add(rim, glass);
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  return g;
}
// Laundry trolley: chrome frame on castors, canvas bag, pile of coloured linen on top, push handle
function addLaundryCart(x, z, rotY) {
  const cg = new THREE.Group();
  cg.add(createBox(1.3, 0.06, 0.85, M.graphite, { x: 0, y: 0.2, z: 0 }));
  [-1, 1].forEach((sx) => [-1, 1].forEach((sz) => {
    cg.add(createCylinder(0.07, 0.07, 0.08, 10, M.graphite, { x: sx * 0.55, y: 0.07, z: sz * 0.33 }, false)).rotation.x = Math.PI / 2;
    cg.add(createBox(0.05, 0.9, 0.05, M.metalSilver, { x: sx * 0.63, y: 0.62, z: sz * 0.41 }, false));
  }));
  cg.add(createBox(1.24, 0.62, 0.8, M.counterWhite, { x: 0, y: 0.54, z: 0 })); // canvas bag
  cg.add(createBox(1.28, 0.05, 0.84, M.metalSilver, { x: 0, y: 1.05, z: 0 }, false)); // top rail
  cg.add(createBox(0.05, 0.05, 0.84, M.metalSilver, { x: 0.63, y: 1.35, z: 0 }, false)); // push handle
  [-1, 1].forEach((sz) => cg.add(createBox(0.05, 0.3, 0.05, M.metalSilver, { x: 0.63, y: 1.2, z: sz * 0.41 }, false)));
  [[0, 0.95, 0, 0], [0.25, 1.05, 0.15, 0.4], [-0.3, 1.02, -0.1, -0.5], [0.05, 1.15, -0.2, 0.9]].forEach(([px, py, pz, ry], i) => {
    const pile = createBox(0.55, 0.18, 0.4, shirtMats[i % shirtMats.length], { x: px, y: py, z: pz });
    pile.rotation.y = ry;
    cg.add(pile);
  });
  cg.position.set(x, 0, z);
  cg.rotation.y = rotY;
  worldGroup.add(cg);
}

// ─── ДАРХОСТ CAMPUS: building 42×15m with six zones + service yard with docks ──
// Lot sits between the west street (x=-46) and the west vertical street (x=12),
// between street 1 (z=-26) and the main road (z=12.6).
const CAMPUS = { x0: -38, x1: 4, zFront: 5, zBack: -10, wallH: 3.4 };
const YARD = { z0: -19.8, z1: -10 };
const LOT = { x0: -39.8, x1: 5.8, z0: -19.8, z1: 6.4 };
const DOCK_BAYS = [{ x: -11 }, { x: -5 }, { x: 1 }];
const DOCK_W = 3.2;

M.floorConcrete = new THREE.MeshStandardMaterial({ color: 0xe4e2dc, roughness: 0.9 });
M.wallInner = new THREE.MeshStandardMaterial({ color: 0xf1efe9, roughness: 0.9 });
// Hex colours are read as linear in r128; convert so brand colours match the logo
M.brandNavy = new THREE.MeshStandardMaterial({ color: new THREE.Color(0x033d53).convertSRGBToLinear(), roughness: 0.55 });
M.brandGreen = new THREE.MeshStandardMaterial({ color: new THREE.Color(0x52b369).convertSRGBToLinear(), roughness: 0.55 });
M.rollerDoor = new THREE.MeshStandardMaterial({ color: 0x9aa3ad, roughness: 0.6, metalness: 0.3 });
M.carpetA = new THREE.MeshStandardMaterial({ color: 0x9b2c2c, roughness: 0.9 });
M.carpetB = new THREE.MeshStandardMaterial({ color: 0x1e4d6b, roughness: 0.9 });
M.carpetC = new THREE.MeshStandardMaterial({ color: 0xb8860b, roughness: 0.9 });
M.carpetClean = new THREE.MeshStandardMaterial({ color: 0xd9c7a3, roughness: 0.9 });
M.steel = new THREE.MeshStandardMaterial({ color: 0xb9c0c8, roughness: 0.35, metalness: 0.7 });

const cx = (a, b) => (a + b) / 2;
function slab(x0, x1, z0, z1, h, mat, y, shadow = false) {
  return createBox(x1 - x0, h, z1 - z0, mat, { x: cx(x0, x1), y, z: cx(z0, z1) }, shadow);
}
function wallX(z, x0, x1, h = CAMPUS.wallH, mat = M.wallInner, t = 0.22) {
  worldGroup.add(createBox(x1 - x0, h, t, mat, { x: cx(x0, x1), y: h / 2, z }));
}
function wallZ(x, z0, z1, h = CAMPUS.wallH, mat = M.wallInner, t = 0.22) {
  worldGroup.add(createBox(t, h, z1 - z0, mat, { x, y: h / 2, z: cx(z0, z1) }));
}
// Wall along X with a door gap [gx0, gx1] (lintel kept above)
function wallXDoor(z, x0, x1, gx0, gx1, h = CAMPUS.wallH, mat = M.wallInner) {
  wallX(z, x0, gx0, h, mat);
  wallX(z, gx1, x1, h, mat);
  worldGroup.add(createBox(gx1 - gx0, h - 2.3, 0.22, mat, { x: cx(gx0, gx1), y: 2.3 + (h - 2.3) / 2, z }));
}
function wallZDoor(x, z0, z1, gz0, gz1, h = CAMPUS.wallH, mat = M.wallInner) {
  wallZ(x, z0, gz0, h, mat);
  wallZ(x, gz1, z1, h, mat);
  worldGroup.add(createBox(0.22, h - 2.3, gz1 - gz0, mat, { x, y: 2.3 + (h - 2.3) / 2, z: cx(gz0, gz1) }));
}
function label3d(text, w, h, pos, rotY, opts = {}) {
  const tex = makeCanvasTexture(1024, Math.round((1024 * h) / w), (ctx, cw, ch) => {
    ctx.fillStyle = opts.bg || "#033D53";
    ctx.fillRect(0, 0, cw, ch);
    ctx.fillStyle = opts.fg || "#ffffff";
    ctx.font = `700 ${Math.round(ch * (opts.size || 0.5))}px Inter, Arial, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, cw / 2, ch / 2 + ch * 0.03);
  });
  const m = decal(tex, w, h, pos, rotY);
  worldGroup.add(m);
  return m;
}

// ── Ground: lot paving, yard asphalt, front terrace ──
worldGroup.add(slab(LOT.x0, LOT.x1, LOT.z0, LOT.z1, 0.06, M.floorConcrete, 0.03));
worldGroup.add(slab(LOT.x0, LOT.x1, YARD.z0, YARD.z1, 0.07, M.asphaltParking, 0.04));
worldGroup.add(slab(CAMPUS.x0 - 1, CAMPUS.x1 + 1, CAMPUS.zFront, LOT.z1, 0.08, M.pavers, 0.05));
worldGroup.add(slab(CAMPUS.x0, CAMPUS.x1, CAMPUS.zBack, CAMPUS.zFront, 0.04, M.floorPavilion, 0.09));

// ── Building shell ──
const WH = CAMPUS.wallH;
wallZ(CAMPUS.x0, CAMPUS.zBack, CAMPUS.zFront, WH, M.wallClay, 0.34);
wallZ(CAMPUS.x1, CAMPUS.zBack, CAMPUS.zFront, WH, M.wallClay, 0.34);
// Back wall with three dock openings (roller doors rolled up)
{
  let x = CAMPUS.x0;
  DOCK_BAYS.forEach((b) => {
    wallX(CAMPUS.zBack, x, b.x - DOCK_W / 2, WH, M.wallClay);
    worldGroup.add(createBox(DOCK_W, WH - 2.7, 0.34, M.wallClay, { x: b.x, y: 2.7 + (WH - 2.7) / 2, z: CAMPUS.zBack }));
    worldGroup.add(createBox(DOCK_W + 0.3, 0.45, 0.5, M.rollerDoor, { x: b.x, y: 2.5, z: CAMPUS.zBack - 0.1 }));
    worldGroup.add(createBox(DOCK_W, 0.06, 0.06, M.parkingYellow, { x: b.x, y: 2.72, z: CAMPUS.zBack - 0.2 }, false));
    x = b.x + DOCK_W / 2;
  });
  wallX(CAMPUS.zBack, x, CAMPUS.x1, WH, M.wallClay);
}
// Roof parapet trims
worldGroup.add(createBox(CAMPUS.x1 - CAMPUS.x0 + 0.5, 0.14, 0.5, M.wallTrim, { x: cx(CAMPUS.x0, CAMPUS.x1), y: WH + 0.07, z: CAMPUS.zBack }, false));
[CAMPUS.x0, CAMPUS.x1].forEach((x) => worldGroup.add(createBox(0.5, 0.14, CAMPUS.zFront - CAMPUS.zBack, M.wallTrim, { x, y: WH + 0.07, z: cx(CAMPUS.zBack, CAMPUS.zFront) }, false)));

// Front facade: plinth + glass curtain wall in slim graphite mullions + header beam; two entrances
// (reception at x=-5, partner point at x=-30) are real glazed double doors under a canopy.
const PLINTH = 0.45; // solid base band so the glass doesn't touch the pavement
const HEADER = 2.85; // glass stops here; solid beam up to the roof line
const DOORS = [-5, -30];
const DOOR_W = 3.4;
worldGroup.add(createBox(CAMPUS.x1 - CAMPUS.x0, PLINTH, 0.3, M.wallTrim, { x: cx(CAMPUS.x0, CAMPUS.x1), y: PLINTH / 2, z: CAMPUS.zFront }));
worldGroup.add(createBox(CAMPUS.x1 - CAMPUS.x0, WH - HEADER, 0.3, M.wallClay, { x: cx(CAMPUS.x0, CAMPUS.x1), y: HEADER + (WH - HEADER) / 2, z: CAMPUS.zFront }));
// Horizontal rails top/bottom of the glazing and a mid rail at 1.1 m
[PLINTH, 1.1, HEADER].forEach((ry) => worldGroup.add(createBox(CAMPUS.x1 - CAMPUS.x0, 0.06, 0.14, M.graphite, { x: cx(CAMPUS.x0, CAMPUS.x1), y: ry, z: CAMPUS.zFront }, false)));
const GLASS_H = HEADER - PLINTH;
for (let gx = CAMPUS.x0 + 1.2; gx < CAMPUS.x1 - 0.6; gx += 2.4) {
  const inDoor = DOORS.some((dx) => Math.abs(gx - dx) < DOOR_W / 2 + 1.0);
  if (!inDoor) {
    worldGroup.add(createBox(2.34, GLASS_H, 0.05, M.glassCyan, { x: gx, y: PLINTH + GLASS_H / 2, z: CAMPUS.zFront }, false));
    worldGroup.add(createBox(0.08, GLASS_H, 0.14, M.graphite, { x: gx + 1.2, y: PLINTH + GLASS_H / 2, z: CAMPUS.zFront }, false));
  }
}
DOORS.forEach((dx) => {
  // solid shoulders left/right of the frame close the gap to the next mullion
  [-1, 1].forEach((sgn) => worldGroup.add(createBox(1.0, HEADER, 0.3, M.wallClay, { x: dx + sgn * (DOOR_W / 2 + 0.5), y: HEADER / 2, z: CAMPUS.zFront })));
  // door frame: two jambs + transom beam, then two glass leaves with handles (open doorway, people walk through)
  [-1, 1].forEach((sgn) => worldGroup.add(createBox(0.16, HEADER, 0.2, M.graphite, { x: dx + sgn * (DOOR_W / 2 - 0.08), y: HEADER / 2, z: CAMPUS.zFront }, false)));
  worldGroup.add(createBox(DOOR_W, 0.14, 0.2, M.graphite, { x: dx, y: 2.35, z: CAMPUS.zFront }, false));
  worldGroup.add(createBox(DOOR_W - 0.32, HEADER - 2.42, 0.05, M.glassCyan, { x: dx, y: 2.42 + (HEADER - 2.42) / 2, z: CAMPUS.zFront }, false));
  [-1, 1].forEach((sgn) => {
    const lx = dx + sgn * (DOOR_W / 4);
    worldGroup.add(createBox(DOOR_W / 2 - 0.2, 2.2, 0.04, M.glassCyan, { x: lx, y: 1.14, z: CAMPUS.zFront }, false));
    worldGroup.add(createBox(0.06, 2.28, 0.1, M.graphite, { x: lx - sgn * (DOOR_W / 4 - 0.11), y: 1.14, z: CAMPUS.zFront }, false));
    worldGroup.add(createBox(0.04, 0.6, 0.06, M.metalSilver, { x: lx - sgn * 0.14, y: 1.05, z: CAMPUS.zFront + 0.12 }, false));
  });
  worldGroup.add(createBox(DOOR_W, 0.02, 1.2, M.graphite, { x: dx, y: 0.12, z: CAMPUS.zFront + 0.7 }, false)); // entrance mat
  // Canopy: navy slab with a green underside strip and two slim steel hangers
  worldGroup.add(createBox(DOOR_W + 1.6, 0.18, 2.2, M.brandNavy, { x: dx, y: HEADER + 0.34, z: CAMPUS.zFront + 1.1 }));
  worldGroup.add(createBox(DOOR_W + 1.4, 0.03, 2.0, M.brandGreen, { x: dx, y: HEADER + 0.24, z: CAMPUS.zFront + 1.1 }, false));
  [-1, 1].forEach((sgn) => worldGroup.add(createBox(0.06, 0.06, 1.9, M.metalSilver, { x: dx + sgn * (DOOR_W / 2 + 0.6), y: HEADER + 0.47, z: CAMPUS.zFront + 1.1 }, false)));
});
[CAMPUS.x0, -26, -14, -2, CAMPUS.x1].forEach((colX) => worldGroup.add(createBox(0.55, WH, 0.55, M.graphite, { x: colX, y: WH / 2, z: CAMPUS.zFront })));
// Parapet band with the company sign (texture assigned once the logo loads)
worldGroup.add(createBox(CAMPUS.x1 - CAMPUS.x0 + 0.5, 1.5, 0.4, M.brandNavy, { x: cx(CAMPUS.x0, CAMPUS.x1), y: WH + 0.75, z: CAMPUS.zFront }));
worldGroup.add(createBox(CAMPUS.x1 - CAMPUS.x0 + 0.5, 0.1, 0.5, M.brandGreen, { x: cx(CAMPUS.x0, CAMPUS.x1), y: WH + 1.53, z: CAMPUS.zFront }, false));
const facadeSignMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, transparent: true });
const facadeSign = new THREE.Mesh(new THREE.PlaneGeometry(13.0, 1.24), facadeSignMat);
facadeSign.position.set(-5, WH + 0.75, CAMPUS.zFront + 0.22);
worldGroup.add(facadeSign);
const facadeSign2 = new THREE.Mesh(new THREE.PlaneGeometry(13.0, 1.24), facadeSignMat);
facadeSign2.position.set(-30, WH + 0.75, CAMPUS.zFront + 0.22);
worldGroup.add(facadeSign2);
// Pylon sign by the road
worldGroup.add(createBox(1.4, 6.0, 0.5, M.brandNavy, { x: CAMPUS.x0 - 1.2, y: 3.0, z: 4.8 }));
worldGroup.add(createBox(1.5, 0.12, 0.6, M.brandGreen, { x: CAMPUS.x0 - 1.2, y: 6.06, z: 4.8 }, false));
const pylonSign = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.48), facadeSignMat);
pylonSign.position.set(CAMPUS.x0 - 1.2, 5.2, 5.06);
worldGroup.add(pylonSign);

// ── Interior partitions ──
// x = -14: reception|dispatch (front) and workshop|IT (back)
wallZDoor(-14, CAMPUS.zBack, -2, -6.5, -5.1);
wallZDoor(-14, -2, CAMPUS.zFront, 0.6, 2.0);
// x = -22: dispatch|partner (front) and IT|management (back)
wallZDoor(-22, CAMPUS.zBack, -3, -7.5, -6.1);
wallZDoor(-22, -3, CAMPUS.zFront, 0.6, 2.0);
// z = -2: reception|washers pass-through (carpet conveyor) and a door reception|packers (hand-out)
wallXDoor(-2, -14, -1.0, -8.5, -5.5);
wallXDoor(-2, -1.0, CAMPUS.x1, 1.0, 2.5);
// x = -2.5: washers|packers partition with a wide opening at the back (dock traffic)
wallZDoor(-2.5, CAMPUS.zBack, -2, -9.6, -6.4);
// z = -3: IT room glass front and management|partner wall
worldGroup.add(createBox(8 - 1.4, 2.9, 0.08, M.glass, { x: cx(-22, -14) - 0.7, y: 1.45, z: -3 }, false));
worldGroup.add(createBox(0.1, 2.9, 0.12, M.graphite, { x: -14.7, y: 1.45, z: -3 }, false));
wallXDoor(-3, CAMPUS.x0, -22, -27, -25.6);

// Zone name plates above each doorway (inside)
label3d("ОПЕРАТОР · ПРИЁМ ЗАКАЗОВ", 4.6, 0.55, { x: -5, y: 2.75, z: CAMPUS.zFront - 0.14 }, Math.PI);
label3d("ВЛАДЕЛЕЦ", 3.0, 0.55, { x: -30, y: 2.75, z: CAMPUS.zFront - 0.14 }, Math.PI);
label3d("МОЙЩИК", 2.4, 0.55, { x: -7, y: 2.72, z: -2 - 0.12 }, Math.PI);
label3d("УПАКОВЩИК", 2.8, 0.55, { x: 1.75, y: 2.72, z: -2 - 0.12 }, Math.PI);
label3d("ВОДИТЕЛЬ · СМЕНА", 3.6, 0.5, { x: -18.7, y: 3.15, z: -3 - 0.1 }, Math.PI);
label3d("МЕНЕДЖЕР", 3.0, 0.55, { x: -26.3, y: 2.75, z: -3 - 0.12 }, Math.PI);
label3d("ОПЕРАТОР · МАРШРУТЫ", 4.2, 0.5, { x: -18, y: 2.75, z: -3 + 0.12 }, 0);

// ── Interior: procedural fixtures now, poly.pizza furniture once the models load (buildInterior) ──
const FLOOR_Y = 0.11;

// ── 1. ПРИЁМНЫЙ ПУНКТ (x -14..4, z -2..5) ──
// Queue screen + logo wall behind the desk
worldGroup.add(createBox(3.0, 1.3, 0.08, M.graphite, { x: -6, y: 2.3, z: -1.85 }));
worldGroup.add(createBox(2.8, 1.1, 0.06, M.screenGlow, { x: -6, y: 2.3, z: -1.8 }, false));
// Operators only work with orders, customers and calls — nothing physical is stored here.
// Third operator: phone desk by the west wall (furniture in buildInterior), with a name plate
machinePlate("ЗАКАЗЫ · ЗВОНКИ · SMS", 3.2, -11.2, 0.8, 2.65);
// Rack of clean, packed garments lives with the packers (see section 2)
function garmentRail(x, z, len, rotY, count) {
  const g = new THREE.Group();
  [-1, 1].forEach((sgn) => g.add(createCylinder(0.04, 0.04, 2.4, 8, M.graphite, { x: sgn * len / 2, y: 1.2, z: 0 })));
  g.add(createBox(len + 0.3, 0.06, 0.06, M.steel, { x: 0, y: 2.35, z: 0 }));
  for (let i = 0; i < count; i++) {
    const gx = -len / 2 + 0.35 + i * ((len - 0.7) / (count - 1));
    g.add(createBox(0.38, 0.85, 0.1, shirtMats[i % shirtMats.length], { x: gx, y: 1.7, z: 0 }));
    g.add(createBox(0.44, 0.95, 0.14, M.glassCyan, { x: gx, y: 1.7, z: 0 }, false));
  }
  g.position.set(x, 0.1, z);
  g.rotation.y = rotY;
  worldGroup.add(g);
}

// ── 2. ЦЕХ (x -14..4, z -10..-2): carpet washing line, centrifuge, wringer, drying racks, packing ──
// Every machine is built so it reads at a glance and carries a hanging name plate.
const M_belt = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.9 });
const M_hazard = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.5 });
function machinePlate(text, w, x, z, y = 2.65, rotY = 0) {
  // hanging plate: two thin cables from the ceiling line + navy sign
  [-1, 1].forEach((sgn) => {
    const dx = sgn * (w / 2 - 0.15) * Math.cos(rotY), dz = -sgn * (w / 2 - 0.15) * Math.sin(rotY);
    worldGroup.add(createCylinder(0.012, 0.012, WH - y - 0.2, 6, M.graphite, { x: x + dx, y: (WH + y + 0.2) / 2, z: z + dz }, false));
  });
  label3d(text, w, 0.4, { x, y, z }, rotY, { size: 0.55 });
}
function carpetRoll(g, color, x, y, z, rotY, r = 0.24, len = 1.7) {
  const roll = createCylinder(r, r, len, 14, new THREE.MeshStandardMaterial({ color, roughness: 0.9 }), { x, y, z });
  roll.rotation.set(0, rotY, Math.PI / 2);
  g.add(roll);
  return roll;
}
// Carpet washing line: conveyor feeding a carpet under four rotating brushes with a spray bar
function buildCarpetWasher(x, z) {
  const g = new THREE.Group();
  g.add(createBox(5.6, 0.9, 1.6, M.washerTeal, { x: 0, y: 0.45, z: 0 }));
  g.add(createBox(5.4, 0.3, 0.04, M.washerCyan, { x: 0, y: 0.42, z: 0.81 }, false)); // water level window
  g.add(createBox(5.9, 0.06, 1.3, M_belt, { x: 0, y: 0.93, z: 0 }, false)); // conveyor belt
  g.add(createBox(4.6, 0.05, 1.1, M.carpetA, { x: -0.4, y: 0.98, z: 0 }, false)); // carpet going through
  [-1, 1].forEach((sgn) => g.add(createBox(5.9, 0.12, 0.08, M.metalSilver, { x: 0, y: 1.0, z: sgn * 0.7 }, false)));
  [-2.3, 0, 2.3].forEach((px) => [-1, 1].forEach((sgn) => g.add(createBox(0.1, 1.25, 0.1, M.steel, { x: px, y: 1.55, z: sgn * 0.88 }, false))));
  [-1, 1].forEach((sgn) => g.add(createBox(5.0, 0.1, 0.1, M.steel, { x: 0, y: 2.15, z: sgn * 0.88 }, false)));
  for (let i = 0; i < 4; i++) {
    const b = createCylinder(0.24, 0.24, 1.55, 14, i % 2 ? M.crimsonRed : M.parkingBlue, { x: -1.9 + i * 1.25, y: 1.3, z: 0 });
    b.rotation.x = Math.PI / 2;
    g.add(b);
  }
  const pipe = createCylinder(0.05, 0.05, 5.2, 8, M.metalSilver, { x: 0, y: 2.0, z: 0 }, false);
  pipe.rotation.z = Math.PI / 2;
  g.add(pipe);
  for (let i = 0; i < 9; i++) g.add(createCylinder(0.03, 0.03, 0.18, 6, M.metalSilver, { x: -2.4 + i * 0.6, y: 1.88, z: 0 }, false));
  g.add(createBox(0.6, 1.5, 0.5, M.graphite, { x: 3.3, y: 0.75, z: 0.55 })); // control cabinet
  g.add(createBox(0.42, 0.3, 0.04, M.screenGlow, { x: 3.3, y: 1.2, z: 0.81 }, false));
  [M.brandGreen, M.parkingYellow, M.crimsonRed].forEach((m, i) => g.add(createBox(0.08, 0.08, 0.03, m, { x: 3.15 + i * 0.15, y: 0.9, z: 0.81 }, false)));
  g.position.set(x, 0.1, z);
  worldGroup.add(g);
}
// Centrifuge: steel drum, hazard band, hinged lid with handle, control column, rolled carpet waiting
function buildCentrifuge(x, z) {
  const g = new THREE.Group();
  g.add(createCylinder(0.9, 0.9, 1.4, 24, M.steel, { x: 0, y: 0.7, z: 0 }));
  g.add(createCylinder(0.93, 0.93, 0.14, 24, M_hazard, { x: 0, y: 0.5, z: 0 }, false));
  g.add(createCylinder(0.95, 0.95, 0.1, 24, M.graphite, { x: 0, y: 1.45, z: 0 }));
  g.add(createCylinder(0.55, 0.55, 0.04, 20, M.metalSilver, { x: 0, y: 1.52, z: 0 }, false)); // inner hatch
  g.add(createBox(0.5, 0.06, 0.06, M.metalSilver, { x: 0, y: 1.62, z: 0 }, false)); // handle
  [-1, 1].forEach((sgn) => g.add(createBox(0.06, 0.1, 0.06, M.metalSilver, { x: sgn * 0.22, y: 1.57, z: 0 }, false)));
  g.add(createBox(0.2, 0.12, 0.5, M.graphite, { x: 0, y: 1.48, z: -0.85 }, false)); // hinge
  g.add(createBox(0.5, 1.3, 0.4, M.graphite, { x: 1.25, y: 0.65, z: 0.35 })); // control column
  g.add(createBox(0.34, 0.24, 0.04, M.screenGlow, { x: 1.25, y: 1.05, z: 0.56 }, false));
  const btn = createCylinder(0.06, 0.06, 0.04, 10, M.crimsonRed, { x: 1.25, y: 0.75, z: 0.56 }, false);
  btn.rotation.x = Math.PI / 2;
  g.add(btn);
  carpetRoll(g, 0x1e4d6b, -0.2, 0.24, 1.25, 0.25);
  g.position.set(x, 0.1, z);
  worldGroup.add(g);
}
// Wringer press: two big steel rollers with a carpet pulled through between them
function buildWringer(x, z) {
  const g = new THREE.Group();
  g.add(createBox(2.4, 0.5, 1.7, M.graphite, { x: 0, y: 0.25, z: 0 }));
  [-1, 1].forEach((sgn) => g.add(createBox(0.16, 1.5, 0.5, M.steel, { x: sgn * 1.05, y: 1.2, z: 0 })));
  g.add(createBox(2.3, 0.12, 0.5, M.steel, { x: 0, y: 1.9, z: 0 }, false));
  [0.85, 1.45].forEach((ry) => {
    const r = createCylinder(0.28, 0.28, 2.0, 18, M.metalSilver, { x: 0, y: ry, z: 0 });
    r.rotation.z = Math.PI / 2;
    g.add(r);
  });
  [[1.2, 1.3, 1.75], [-1.05, 0.9, -1.4]].forEach(([tz, len, legZ]) => { // in/out feed tables with legs
    g.add(createBox(2.0, 0.06, len, M.steel, { x: 0, y: 1.1, z: tz }, false));
    [-1, 1].forEach((sx) => g.add(createBox(0.06, 1.08, 0.06, M.steel, { x: sx * 0.9, y: 0.54, z: legZ }, false)));
  });
  g.add(createBox(1.8, 0.05, 1.5, M.carpetC, { x: 0.1, y: 1.15, z: 0.95 }, false)); // carpet coming out the front
  g.add(createBox(1.5, 0.05, 1.1, M.carpetC, { x: 0, y: 1.15, z: -0.8 }, false)); // and going in at the back
  g.add(createBox(0.4, 0.5, 0.3, M.graphite, { x: 1.45, y: 1.0, z: 0.6 })); // control box
  g.add(createBox(0.28, 0.18, 0.03, M.screenGlow, { x: 1.45, y: 1.1, z: 0.76 }, false));
  g.position.set(x, 0.1, z);
  worldGroup.add(g);
}
// Drying: A-frame steel racks with a carpet hung over the top bar, plus a floor fan
function buildDryRack(x, z, mat) {
  const g = new THREE.Group();
  [-1, 1].forEach((sgn) => {
    [-1, 1].forEach((side) => {
      const leg = createBox(0.07, 2.7, 0.07, M.steel, { x: sgn * 0.75, y: 1.3, z: side * 0.5 }, false);
      leg.rotation.x = -side * 0.38;
      g.add(leg);
    });
  });
  g.add(createBox(1.7, 0.1, 0.1, M.steel, { x: 0, y: 2.55, z: 0 }, false));
  g.add(createBox(1.3, 2.2, 0.12, mat, { x: 0, y: 1.42, z: 0.12 }));
  g.add(createBox(1.3, 2.2, 0.12, mat, { x: 0, y: 1.42, z: -0.12 }));
  g.add(createBox(1.3, 0.12, 0.36, mat, { x: 0, y: 2.56, z: 0 }, false));
  g.position.set(x, 0.1, z);
  worldGroup.add(g);
}
function buildFloorFan(x, z, rotY) {
  const g = new THREE.Group();
  g.add(createCylinder(0.45, 0.5, 0.08, 16, M.graphite, { x: 0, y: 0.04, z: 0 }));
  g.add(createCylinder(0.05, 0.05, 1.1, 8, M.metalSilver, { x: 0, y: 0.6, z: 0 }, false));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.05, 8, 24), M.graphite);
  ring.position.set(0, 1.5, 0);
  ring.castShadow = true;
  g.add(ring);
  const hub = createCylinder(0.12, 0.12, 0.2, 12, M.graphite, { x: 0, y: 1.5, z: 0 }, false);
  hub.rotation.x = Math.PI / 2;
  g.add(hub);
  for (let i = 0; i < 3; i++) {
    const blade = createBox(0.95, 0.16, 0.02, M.metalSilver, { x: 0, y: 1.5, z: 0 }, false);
    blade.rotation.z = (i / 3) * Math.PI * 2;
    g.add(blade);
  }
  g.position.set(x, 0.1, z);
  g.rotation.y = rotY;
  worldGroup.add(g);
}

buildCarpetWasher(-10.8, -5.4);
machinePlate("МОЙКА КОВРОВ", 3.0, -10.8, -5.4);
buildCentrifuge(-6.3, -5.6);
machinePlate("ЦЕНТРИФУГА", 2.6, -6.3, -5.6);
buildWringer(-8.0, -9.0);
machinePlate("ОТЖИМ · ПРЕСС", 2.8, -8.0, -9.0);
[-13.2, -11.6, -10.0, -8.4].forEach((rx, i) => buildDryRack(rx + 0.7, -3.0, [M.carpetA, M.carpetB, M.carpetC, M.carpetClean][i]));
buildFloorFan(-6.6, -3.2, Math.PI / 2);
machinePlate("СУШКА", 2.0, -10.8, -3.0, 3.0);
// Packing counter by the dispatch window
worldGroup.add(createBox(3.0, 0.95, 1.1, M.counterWhite, { x: -0.8, y: 0.48, z: -3.0 }));
worldGroup.add(createBox(2.8, 0.08, 0.95, new THREE.MeshStandardMaterial({ color: 0xf59e0b }), { x: -0.8, y: 0.99, z: -3.0 }));
// Two industrial washers along the west wall (procedural: round glass door + control panel)
[-7.6, -9.1].forEach((z) => worldGroup.add(buildHeavyDutyWasher(-13.2, z, M.washerTeal, Math.PI / 2)));
machinePlate("СТИРАЛЬНЫЕ МАШИНЫ", 3.4, -12.85, -8.35, 2.65, Math.PI / 2);
// Packers' side: wrapping station (film roll on a stand) and name plates
{
  const g = new THREE.Group();
  g.add(createBox(0.5, 0.06, 0.5, M.graphite, { x: 0, y: 0.03, z: 0 }));
  g.add(createCylinder(0.04, 0.04, 1.3, 8, M.metalSilver, { x: 0, y: 0.65, z: 0 }, false));
  const film = createCylinder(0.2, 0.2, 1.1, 14, M.glassCyan, { x: 0, y: 1.0, z: 0 }, false);
  film.rotation.z = Math.PI / 2;
  g.add(film);
  g.position.set(2.4, 0.1, -3.4);
  worldGroup.add(g);
}
garmentRail(3.3, -4.0, 2.6, Math.PI / 2, 5); // packed clothes waiting for hand-out / courier
machinePlate("ПРИЁМКА · ЗАМЕР", 3.2, -0.5, -8.4);
machinePlate("УПАКОВКА", 2.4, -0.8, -3.0);
label3d("УПАКОВКА · КОНТРОЛЬ", 3.2, 0.4, { x: -1.0, y: 1.7, z: -9.7 }, 0, { bg: "#52B369" });

// ── 3. ВОДИТЕЛИ (x -22..-14, z -10..-3): route board, staff lockers, key board, cash safe ──
worldGroup.add(createBox(0.08, 2.0, 5.0, M.graphite, { x: -21.8, y: 1.85, z: -6.5 }));
worldGroup.add(createBox(0.06, 1.8, 4.8, M.screenGlow, { x: -21.75, y: 1.85, z: -6.5 }, false));
for (let i = 0; i < 5; i++) worldGroup.add(createBox(0.05, 0.05, 4.4, M.counterWhite, { x: -21.7, y: 1.2 + i * 0.32, z: -6.5 }, false));
[[-8.4, 0x52b369], [-7.2, 0xf59e0b], [-6.0, 0x52b369], [-4.8, 0xd32f2f]].forEach(([z, c]) => worldGroup.add(createBox(0.05, 0.22, 0.9, new THREE.MeshStandardMaterial({ color: c }), { x: -21.68, y: 2.45, z }, false)));
label3d("МАРШРУТЫ НА СЕГОДНЯ · СМЕНЫ", 3.8, 0.36, { x: -21.66, y: 3.05, z: -6.5 }, Math.PI / 2, { bg: "#033D53" });
const lockerWall = (x, z, w, rotY) => {
  const g = new THREE.Group();
  g.add(createBox(w, 2.5, 0.75, M.postomatGrey, { x: 0, y: 1.25, z: 0 }));
  g.add(createBox(w - 0.2, 2.3, 0.04, M.counterWhite, { x: 0, y: 1.25, z: 0.39 }));
  g.add(createBox(w, 0.28, 0.78, M.brandNavy, { x: 0, y: 2.64, z: 0 }, false));
  for (let lx = -w / 2 + 0.7; lx < w / 2 - 0.4; lx += 0.7) g.add(createBox(0.02, 2.2, 0.06, M.graphite, { x: lx, y: 1.25, z: 0.4 }, false));
  for (let ly = 0.45; ly <= 2.2; ly += 0.45) g.add(createBox(w - 0.4, 0.02, 0.06, M.graphite, { x: 0, y: ly, z: 0.4 }, false));
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  worldGroup.add(g);
};
lockerWall(-17.0, -9.55, 5.6, 0); // staff lockers along the back wall
worldGroup.add(createBox(1.0, 0.8, 0.06, M.brandNavy, { x: -14.3, y: 1.7, z: -8.0 }, false)); // key board
for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) worldGroup.add(createBox(0.06, 0.12, 0.06, M.metalSilver, { x: -14.36, y: 1.95 - r * 0.25, z: -8.36 + c * 0.24 }, false));
worldGroup.add(createBox(0.7, 0.9, 0.6, M.graphite, { x: -14.5, y: 0.55, z: -4.0 })); // cash safe
worldGroup.add(createBox(0.1, 0.1, 0.1, M.metalSilver, { x: -14.85, y: 0.7, z: -4.0 }, false));
label3d("КАССА СМЕНЫ", 1.2, 0.3, { x: -14.86, y: 1.35, z: -4.0 }, -Math.PI / 2, { bg: "#52B369", size: 0.6 });

// ── 4. УПРАВЛЕНИЕ (x -38..-22, z -10..-3): KPI board ──
worldGroup.add(createBox(6.0, 2.0, 0.08, M.boardWhite, { x: -30.0, y: 2.0, z: CAMPUS.zBack + 0.2 }));
[[0x0284c7, 0.95], [0x16a34a, 1.45], [0xd32f2f, 1.2], [0xeab308, 1.65], [0x06b6d4, 1.35], [0x52b369, 1.75]].forEach(([col, hh], i) => {
  worldGroup.add(createBox(0.6, hh, 0.09, new THREE.MeshStandardMaterial({ color: col }), { x: -32.3 + i * 0.9, y: 1.1 + hh / 2, z: CAMPUS.zBack + 0.26 }));
});
label3d("ВЫРУЧКА · КАССА · ОТЗЫВЫ", 4.0, 0.36, { x: -30, y: 3.05, z: CAMPUS.zBack + 0.27 }, 0, { bg: "#033D53" });

// ── 5. ВЛАДЕЛЕЦ (x -38..-22, z -3..5): revenue board on the back wall, lounge; furniture in buildInterior ──
worldGroup.add(createBox(6.0, 2.0, 0.08, M.boardWhite, { x: -30.0, y: 2.0, z: -2.75 }));
[[0x0284c7, 1.1], [0x16a34a, 1.5], [0x52b369, 1.75], [0xeab308, 1.3], [0xd32f2f, 0.8], [0x0f766e, 1.6]].forEach(([col, hh], i) => {
  worldGroup.add(createBox(0.6, hh, 0.09, new THREE.MeshStandardMaterial({ color: col }), { x: -32.3 + i * 0.9, y: 1.1 + hh / 2, z: -2.69 }));
});
label3d("ВЫРУЧКА · РАСХОДЫ · ЗАРПЛАТА", 4.4, 0.36, { x: -30, y: 3.05, z: -2.68 }, 0, { bg: "#033D53" });

// ── 6. МАРШРУТЫ · ДИСПЕТЧЕРСКАЯ (x -22..-14, z -3..5): GPS map wall ──
worldGroup.add(createBox(0.08, 2.0, 5.6, M.graphite, { x: -21.8, y: 1.85, z: 1.0 }));
worldGroup.add(createBox(0.06, 1.8, 5.4, M.screenGlow, { x: -21.75, y: 1.85, z: 1.0 }, false));
for (let i = 0; i < 6; i++) {
  worldGroup.add(createBox(0.05, 0.05, 5.0, M.counterWhite, { x: -21.7, y: 1.1 + i * 0.3, z: 1.0 }, false));
  worldGroup.add(createBox(0.05, 1.6, 0.05, M.counterWhite, { x: -21.7, y: 1.85, z: -1.4 + i * 0.95 }, false));
}
label3d("МАРШРУТЫ · СМЕНЫ · ВОДИТЕЛИ", 3.4, 0.36, { x: -21.68, y: 3.0, z: 1.0 }, Math.PI / 2, { bg: "#52B369" });

// Furniture from poly.pizza (Quaternius / Kenney / J-Toastie / dook / CreativeTrio), placed once loaded
const M_cardboard = new THREE.MeshStandardMaterial({ color: new THREE.Color(0xc9a97c).convertSRGBToLinear(), roughness: 0.95 });
const M_tape = new THREE.MeshStandardMaterial({ color: new THREE.Color(0x8b6a3e).convertSRGBToLinear(), roughness: 0.9 });
function cardboardBox(x, z, y, size, rotY = 0) {
  const g = new THREE.Group();
  g.add(createBox(size, size * 0.8, size * 0.85, M_cardboard, { x: 0, y: size * 0.4, z: 0 }));
  g.add(createBox(size * 0.14, size * 0.81, size * 0.86, M_tape, { x: 0, y: size * 0.4, z: 0 }, false));
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  worldGroup.add(g);
}
function buildInterior() {
  const P = prop;
  // 1. Reception: long counter with terminals, staff chairs, lounge, water cooler, vending
  [-8.6, -6.4, -4.2].forEach((x) => P("counter", x, 1.4, Math.PI));
  [-8.4, -4.4].forEach((x) => P("screen", x, 1.25, Math.PI, { y: FLOOR_Y + 1.05 }));
  [-8.4, -4.4].forEach((x) => P("chair", x, 0.3, 0));
  P("desk", -11.2, 1.0, Math.PI, { h: 0.8 });
  P("screen", -11.2, 1.25, Math.PI, { y: FLOOR_Y + 0.8 });
  P("chair", -11.2, 0.1, 0);
  P("sofa", 1.3, 3.5, Math.PI);
  P("roundTable", 1.1, 1.5, 0);
  P("plant", 3.3, 4.3, 0);
  P("plant", -13.3, 4.3, 0.6);
  P("cooler", 3.4, -1.4, -Math.PI / 2);
  P("vending", 3.3, 0.5, -Math.PI / 2);
  // 2. Packers' side: intake desks with bags/boxes, shelves with packed orders, trolley
  [-1.3, 0.2].forEach((x) => P("desk", x, -8.4, Math.PI, { h: 0.8 }));
  [[-1.5, -8.5], [-0.7, -8.3], [0.4, -8.5]].forEach(([x, z], i) => cardboardBox(x, z, FLOOR_Y + 0.8, 0.4, i * 0.4));
  [-8.4, -6.2].forEach((z) => P("shelf", 3.5, z, -Math.PI / 2));
  [[3.5, -8.8, 0.6], [3.5, -8.0, 0.6], [3.5, -8.4, 1.2], [3.5, -6.6, 0.6], [3.5, -5.8, 0.6], [3.5, -6.2, 1.2], [3.5, -6.0, 0.0]].forEach(([x, z, y], i) => cardboardBox(x, z, FLOOR_Y + y, 0.42, (i % 3) * 0.15));
  addLaundryCart(-1.9, -5.4, 0);
  // 3. Drivers' room: table with chairs for the shift briefing, cooler, plant
  P("roundTable", -18.0, -6.0, 0, { h: 0.76 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    P("chair", -18.0 + Math.cos(a) * 1.5, -6.0 + Math.sin(a) * 1.5, Math.atan2(-Math.cos(a), -Math.sin(a)));
  }
  P("cooler", -15.0, -6.2, -Math.PI / 2);
  P("plant", -15.0, -3.7, 0);
  // 4. Management: owner desk (three monitors), cabinets, meeting table, cooler, plants
  P("desk", -34.0, -8.0, Math.PI);
  [-34.6, -34.0, -33.4].forEach((x, i) => P("screen", x, -7.8, Math.PI + (i - 1) * 0.25, { y: FLOOR_Y + 0.76 }));
  P("chair", -34.0, -8.9, 0);
  P("drawer", -37.35, -6.2, Math.PI / 2);
  P("bookcase", -37.4, -8.9, Math.PI / 2);
  P("roundTable", -27.5, -6.5, 0, { h: 0.76 });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
    P("chair", -27.5 + Math.cos(a) * 1.75, -6.5 + Math.sin(a) * 1.75, Math.atan2(-Math.cos(a), -Math.sin(a)));
  }
  P("cooler", -23.0, -3.8, Math.PI / 2);
  P("plant", -23.0, -9.4, 0);
  P("plant", -36.6, -3.6, 0);
  // 5. Owner's office: big desk with three monitors, cabinets, lounge sofa, plants
  P("desk", -30.0, -0.6, Math.PI);
  [-30.6, -30.0, -29.4].forEach((x, i) => P("screen", x, -0.4, Math.PI + (i - 1) * 0.25, { y: FLOOR_Y + 0.76 }));
  P("chair", -30.0, -1.5, 0);
  P("drawer", -37.35, -1.4, Math.PI / 2);
  P("bookcase", -37.4, 1.4, Math.PI / 2);
  P("sofa", -25.0, 3.6, Math.PI);
  P("roundTable", -25.2, 1.6, 0);
  P("plant", -23.2, 4.3, 0);
  P("plant", -36.6, 4.2, 0);
  // 6. Dispatch: two desks facing the GPS wall
  [0.2, 2.4].forEach((z) => {
    P("desk", -19.3, z, Math.PI / 2);
    P("screen", -19.55, z, Math.PI / 2, { y: FLOOR_Y + 0.76 });
    P("chair", -18.4, z, -Math.PI / 2);
  });
  P("plant", -14.6, 4.3, 0);
  P("cooler", -14.6, -2.4, Math.PI / 2);
}

// ── Service yard: docks, parking stalls, fence, gate, lighting ──
DOCK_BAYS.forEach((b, i) => {
  const bayW = 4.2;
  const bayL = 8.0;
  const z0 = CAMPUS.zBack - 0.3;
  worldGroup.add(createBox(bayW, 0.06, 0.15, M.parkingYellow, { x: b.x, y: 0.08, z: z0 - bayL }, false));
  [-1, 1].forEach((s) => worldGroup.add(createBox(0.15, 0.06, bayL, M.parkingYellow, { x: b.x + (s * bayW) / 2, y: 0.08, z: z0 - bayL / 2 }, false)));
  worldGroup.add(createBox(3.0, 0.5, 0.35, M.curbStone, { x: b.x, y: 0.25, z: z0 - 0.2 }));
  [-1, 1].forEach((s) => worldGroup.add(createBox(0.4, 0.5, 0.4, M.graphite, { x: b.x + s * 1.9, y: 0.25, z: z0 - 0.3 }, false)));
  label3d(`ДОК ${i + 1}`, 1.4, 0.4, { x: b.x, y: 3.1, z: CAMPUS.zBack - 0.19 }, Math.PI, { bg: "#52B369", size: 0.6 });
});
// Customer / staff parking stalls along the west part of the yard
const STALL_XS = [-37, -34, -31, -28, -25, -22, -19];
STALL_XS.forEach((sx, i) => {
  worldGroup.add(createBox(0.12, 0.06, 5.4, M.roadStripe, { x: sx - 1.5, y: 0.08, z: YARD.z1 - 2.7 }, false));
  if (i === STALL_XS.length - 1) worldGroup.add(createBox(0.12, 0.06, 5.4, M.roadStripe, { x: sx + 1.5, y: 0.08, z: YARD.z1 - 2.7 }, false));
  worldGroup.add(createBox(1.8, 0.14, 0.2, M.curbStone, { x: sx, y: 0.14, z: YARD.z1 - 0.6 }));
});
label3d("ПАРКОВКА ДЛЯ КЛИЕНТОВ", 5.0, 0.5, { x: -28, y: 2.6, z: CAMPUS.zBack - 0.19 }, Math.PI);
// Fence along the street side with an open dock apron and a gated car entrance
M.fenceSteel = new THREE.MeshStandardMaterial({ color: new THREE.Color(0x33414d).convertSRGBToLinear(), roughness: 0.6, metalness: 0.4 });
function steelFence(x0, x1, z) {
  worldGroup.add(createBox(x1 - x0, 0.06, 0.06, M.fenceSteel, { x: cx(x0, x1), y: 1.6, z }, false));
  worldGroup.add(createBox(x1 - x0, 0.06, 0.06, M.fenceSteel, { x: cx(x0, x1), y: 0.5, z }, false));
  for (let x = x0; x <= x1 + 0.01; x += 2.0) worldGroup.add(createBox(0.12, 1.7, 0.12, M.fenceSteel, { x, y: 0.85, z }, false));
  for (let x = x0 + 0.25; x < x1; x += 0.25) worldGroup.add(createBox(0.03, 1.5, 0.03, M.fenceSteel, { x, y: 0.85, z }, false));
}
steelFence(LOT.x0, -24.5, YARD.z0 + 0.2);
steelFence(-19.5, DOCK_BAYS[0].x - 3.2, YARD.z0 + 0.2);
steelFence(DOCK_BAYS[2].x + 3.2, LOT.x1, YARD.z0 + 0.2);
worldGroup.add(createBox(0.12, 1.7, YARD.z1 - YARD.z0, M.fenceSteel, { x: LOT.x0, y: 0.85, z: cx(YARD.z0, YARD.z1) }, false));
worldGroup.add(createBox(0.12, 1.7, YARD.z1 - YARD.z0, M.fenceSteel, { x: LOT.x1, y: 0.85, z: cx(YARD.z0, YARD.z1) }, false));
// Barrier gate at the parking entrance
worldGroup.add(createBox(0.35, 1.05, 0.35, M.signNavy, { x: -24.3, y: 0.52, z: YARD.z0 + 0.6 }));
worldGroup.add(createBox(4.6, 0.12, 0.05, M.barrierArm, { x: -22.0, y: 0.95, z: YARD.z0 + 0.6 }));
worldGroup.add(createBox(0.28, 1.15, 0.28, M.graphite, { x: -19.7, y: 0.58, z: YARD.z0 + 1.2 }));
// Light poles and planters
function addParkingLightPole(x, z) {
  const g = new THREE.Group();
  g.add(createBox(0.45, 0.5, 0.45, M.curbStone, { x: 0, y: 0.25, z: 0 }));
  g.add(createCylinder(0.08, 0.11, 5.4, 10, M.lampPole, { x: 0, y: 2.95, z: 0 }));
  g.add(createBox(0.9, 0.08, 0.14, M.lampPole, { x: 0, y: 5.6, z: 0.35 }));
  g.add(createBox(0.8, 0.1, 0.35, M.lampPole, { x: 0, y: 5.55, z: 0.7 }));
  g.add(createBox(0.72, 0.04, 0.28, M.lampGlow, { x: 0, y: 5.48, z: 0.7 }, false));
  g.position.set(x, 0, z);
  worldGroup.add(g);
}
[-38.5, -16.5, 4.8].forEach((px) => addParkingLightPole(px, YARD.z0 + 1.0));
[[-39.2, 2.0], [5.2, 2.0], [-39.2, -13.0], [5.2, -13.0]].forEach(([px, pz]) => {
  worldGroup.add(createBox(1.2, 0.5, 1.2, M.curbStone, { x: px, y: 0.25, z: pz }));
  const b = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), M.bush);
  b.position.set(px, 0.75, pz);
  b.castShadow = true;
  worldGroup.add(b);
});
// Front terrace: benches, bike rack, planters, flag poles
[-16, -8, 0].forEach((px) => addCampusPlant(px, 5.9));
[-12, -20].forEach((bx) => {
  worldGroup.add(createBox(1.8, 0.08, 0.45, M.warmOak, { x: bx, y: 0.5, z: 5.9 }));
  [-0.7, 0.7].forEach((s) => worldGroup.add(createBox(0.08, 0.45, 0.4, M.graphite, { x: bx + s, y: 0.27, z: 5.9 }, false)));
});
[-2, 0].forEach((fx) => {
  worldGroup.add(createCylinder(0.05, 0.07, 7.0, 8, M.steel, { x: fx, y: 3.5, z: 6.1 }));
  worldGroup.add(createBox(1.2, 0.7, 0.03, fx === -2 ? M.brandNavy : M.brandGreen, { x: fx + 0.62, y: 6.5, z: 6.1 }, false));
});


// ─── 40 HOUSES NEIGHBORHOOD (RESIDENTIAL DISTRICT FOR "ДОМ И ВЫЕЗДЫ") ───────
const dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath("models/draco/"); // vendored from three@0.128 (works offline / on static hosting)

const gltfLoader = new THREE.GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

// Road Bits tiles (Kay Lousberg, CC0): centre each tile's geometry, then lay the streets
gltfLoader.load(
  "models/pp_road.glb",
  (gltf) => {
    gltf.scene.updateMatrixWorld(true);
    gltf.scene.traverse((o) => {
      if (!o.isMesh) return;
      const geo = o.geometry.clone();
      geo.applyMatrix4(o.matrixWorld);
      geo.computeBoundingBox();
      const c = geo.boundingBox.getCenter(new THREE.Vector3());
      geo.translate(-c.x, -geo.boundingBox.min.y, -c.z);
      const mat = o.material.clone();
      if (mat.map) mat.map.encoding = THREE.sRGBEncoding;
      mat.metalness = 0;
      mat.roughness = 0.92;
      mat.needsUpdate = true;
      roadTiles[o.name] = { geometry: geo, material: mat };
    });
    buildRoads();
  },
  undefined,
  (err) => console.warn("Could not load pp_road.glb", err)
);

// ─── PROCEDURAL TWO-STOREY HOUSES (siding + dark gable roofs + garage + porch) ─
const HOUSE_PALETTES = [
  { siding: 0xf3f2ee, roof: 0x1c1f24, trim: 0x33373d },
  { siding: 0xdddfdc, roof: 0x241f1b, trim: 0x2a2d31 },
  { siding: 0xebe3d2, roof: 0x1c1f24, trim: 0x3f444b },
  { siding: 0xc8d1d6, roof: 0x17191d, trim: 0x2a2d31 },
  { siding: 0xf6f0e7, roof: 0x2b2420, trim: 0x3f444b },
  { siding: 0xd9d4c5, roof: 0x212429, trim: 0x33373d },
];

const houseMats = HOUSE_PALETTES.map((p) => ({
  siding: new THREE.MeshStandardMaterial({ color: p.siding, roughness: 0.85 }),
  roof: new THREE.MeshStandardMaterial({ color: p.roof, roughness: 0.75 }),
  trim: new THREE.MeshStandardMaterial({ color: p.trim, roughness: 0.6 }),
  fascia: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }),
}));

const gableGeoCache = {};
function gableGeometry(w, dpt, h) {
  const key = `${w}|${dpt}|${h}`;
  if (gableGeoCache[key]) return gableGeoCache[key];
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2, 0);
  shape.lineTo(w / 2, 0);
  shape.lineTo(0, h);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: dpt, bevelEnabled: false });
  geo.translate(0, 0, -dpt / 2);
  gableGeoCache[key] = geo;
  return geo;
}

// Gable roof with ridge along Z (triangle faces front/back)
function gableRoof(w, dpt, h, mat, pos, rotY = 0) {
  const mesh = new THREE.Mesh(gableGeometry(w, dpt, h), mat);
  mesh.position.set(pos.x, pos.y, pos.z);
  mesh.rotation.y = rotY;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function windowBox(g, w, h, pos, mat) {
  g.add(createBox(w + 0.12, h + 0.12, 0.05, mat, { x: pos.x, y: pos.y, z: pos.z }, false));
  g.add(createBox(w, h, 0.05, M.glass, { x: pos.x, y: pos.y, z: pos.z + 0.02 }, false));
  g.add(createBox(0.04, h, 0.06, mat, { x: pos.x, y: pos.y, z: pos.z + 0.03 }, false));
}

const HOUSE_DRIVEWAY_LEN = 4.2;
const HOUSE_LOT_FRONT = 2.1 + HOUSE_DRIVEWAY_LEN; // local z of the lot's street edge
// Local frame: house faces +Z. Footprint ≈ x[-3.9..3.0], z[-2.6..HOUSE_LOT_FRONT].
function buildHouse(paletteIdx, mirror) {
  const g = new THREE.Group();
  const mt = houseMats[paletteIdx];
  const FRONT = 1.7; // main block front face (z)

  // Main two-storey block
  g.add(createBox(3.8, 3.6, 3.8, mt.siding, { x: 1.1, y: 1.8, z: -0.2 }));
  g.add(gableRoof(4.5, 4.5, 1.6, mt.roof, { x: 1.1, y: 3.58, z: -0.2 }));
  g.add(createBox(3.9, 0.08, 3.9, mt.fascia, { x: 1.1, y: 3.57, z: -0.2 }, false));

  // Second-floor front windows (3), first-floor bay window
  [-0.05, 1.1, 2.25].forEach((x) => windowBox(g, 0.62, 1.05, { x, y: 2.75, z: FRONT + 0.02 }, mt.trim));
  windowBox(g, 1.5, 1.05, { x: 1.75, y: 1.45, z: FRONT + 0.02 }, mt.trim);
  // Side windows on the right wall (x = 3.0)
  [-1.1, 0.5].forEach((z) => {
    g.add(createBox(0.05, 1.12, 0.74, mt.trim, { x: 3.02, y: 2.75, z }, false));
    g.add(createBox(0.05, 1.0, 0.62, M.glass, { x: 3.04, y: 2.75, z }, false));
  });

  // Front door
  g.add(createBox(0.95, 2.05, 0.08, mt.trim, { x: -0.1, y: 1.05, z: FRONT + 0.03 }, false));
  g.add(createBox(0.7, 0.55, 0.05, M.glass, { x: -0.1, y: 1.55, z: FRONT + 0.08 }, false));

  // Porch: stone floor, columns with stone bases, railing, roof
  g.add(createBox(3.9, 0.32, 1.6, M.stone, { x: 1.1, y: 0.16, z: FRONT + 0.8 }));
  g.add(createBox(4.3, 0.14, 1.9, mt.roof, { x: 1.1, y: 2.5, z: FRONT + 0.85 }));
  g.add(createBox(4.3, 0.06, 1.9, mt.fascia, { x: 1.1, y: 2.41, z: FRONT + 0.85 }, false));
  [-0.65, 2.85].forEach((x) => {
    g.add(createBox(0.42, 0.85, 0.42, M.stone, { x, y: 0.75, z: FRONT + 1.4 }));
    g.add(createBox(0.18, 1.4, 0.18, mt.fascia, { x, y: 1.85, z: FRONT + 1.4 }, false));
  });
  g.add(createBox(1.5, 0.05, 0.05, mt.fascia, { x: 2.1, y: 1.1, z: FRONT + 1.55 }, false));
  g.add(createBox(1.5, 0.05, 0.05, mt.fascia, { x: 2.1, y: 0.7, z: FRONT + 1.55 }, false));
  for (let i = 0; i < 5; i++) {
    g.add(createBox(0.04, 0.5, 0.04, mt.fascia, { x: 1.5 + i * 0.3, y: 0.85, z: FRONT + 1.55 }, false));
  }
  // Steps
  g.add(createBox(1.2, 0.18, 0.4, M.pavers, { x: -0.1, y: 0.09, z: FRONT + 1.78 }, false));
  g.add(createBox(1.2, 0.1, 0.4, M.pavers, { x: -0.1, y: 0.05, z: FRONT + 2.15 }, false));

  // Garage (single storey, protrudes forward)
  g.add(createBox(4.0, 2.5, 3.4, mt.siding, { x: -1.9, y: 1.25, z: 0.4 }));
  g.add(gableRoof(4.7, 4.1, 1.35, mt.roof, { x: -1.9, y: 2.48, z: 0.4 }));
  g.add(createBox(4.1, 0.08, 3.5, mt.fascia, { x: -1.9, y: 2.47, z: 0.4 }, false));
  const GF = 0.4 + 1.7; // garage front face z
  g.add(createBox(4.0, 0.5, 0.08, M.stone, { x: -1.9, y: 0.25, z: GF + 0.04 }, false));
  g.add(createBox(3.1, 1.95, 0.07, mt.trim, { x: -1.9, y: 1.0, z: GF + 0.04 }, false));
  const doorLine = new THREE.MeshStandardMaterial({ color: 0x1e2126, roughness: 0.6 });
  [0.5, 0.98, 1.46].forEach((y) => g.add(createBox(3.0, 0.03, 0.02, doorLine, { x: -1.9, y, z: GF + 0.09 }, false)));
  windowBox(g, 0.38, 0.6, { x: -1.9, y: 2.95, z: GF + 0.02 }, mt.trim);

  // Driveway (long enough for a truck), lawn, paver path, bushes
  const DL = HOUSE_DRIVEWAY_LEN;
  const lotFront = GF + DL;
  g.add(createBox(4.0, 0.04, DL, M.driveway, { x: -1.9, y: 0.02, z: GF + DL / 2 }, false));
  const lawnStart = FRONT + 2.35;
  g.add(createBox(4.0, 0.05, lotFront - lawnStart, M.lawnDark, { x: 1.1, y: 0.02, z: (lawnStart + lotFront) / 2 }, false));
  g.add(createBox(0.9, 0.06, lotFront - lawnStart, M.pavers, { x: -0.1, y: 0.03, z: (lawnStart + lotFront) / 2 }, false));
  const bushGeo = new THREE.SphereGeometry(0.42, 8, 6);
  [{ x: 1.4, z: FRONT + 2.6 }, { x: 2.5, z: FRONT + 3.0 }, { x: 3.2, z: FRONT + 2.3 }].forEach((p) => {
    const b = new THREE.Mesh(bushGeo, M.bush);
    b.position.set(p.x, 0.3, p.z);
    b.scale.y = 0.75;
    b.castShadow = true;
    g.add(b);
  });

  if (mirror) g.scale.x = -1;
  return g;
}

function buildTree(x, z, s = 1) {
  const g = new THREE.Group();
  const trunk = createCylinder(0.09, 0.13, 1.4, 7, M.trunk, { x: 0, y: 0.7, z: 0 });
  const c1 = new THREE.Mesh(new THREE.SphereGeometry(0.9, 9, 7), M.leaves);
  c1.position.set(0, 1.8, 0);
  const c2 = new THREE.Mesh(new THREE.SphereGeometry(0.65, 9, 7), M.leavesLight);
  c2.position.set(0.35, 2.35, 0.2);
  c1.castShadow = c2.castShadow = true;
  g.add(trunk, c1, c2);
  g.position.set(x, 0, z);
  g.scale.setScalar(s);
  return g;
}

// ─── FENCES ─────────────────────────────────────────────────────────────────
M.fence = new THREE.MeshStandardMaterial({ color: 0xb48c5e, roughness: 0.9 });
M.fencePost = new THREE.MeshStandardMaterial({ color: 0x8d6a45, roughness: 0.9 });
const FENCE_H = 1.05;

function addFence(x0, z0, x1, z1) {
  const len = Math.hypot(x1 - x0, z1 - z0);
  if (len < 0.5) return;
  const cx = (x0 + x1) / 2;
  const cz = (z0 + z1) / 2;
  const alongX = Math.abs(x1 - x0) > Math.abs(z1 - z0);
  const panel = createBox(alongX ? len : 0.06, FENCE_H - 0.15, alongX ? 0.06 : len, M.fence, { x: cx, y: FENCE_H / 2 + 0.05, z: cz }, false);
  worldGroup.add(panel);
  const rail = createBox(alongX ? len : 0.1, 0.08, alongX ? 0.1 : len, M.fencePost, { x: cx, y: FENCE_H + 0.02, z: cz }, false);
  worldGroup.add(rail);
  const n = Math.max(1, Math.round(len / 2.4));
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    worldGroup.add(createBox(0.14, FENCE_H + 0.12, 0.14, M.fencePost, { x: x0 + (x1 - x0) * t, y: (FENCE_H + 0.12) / 2, z: z0 + (z1 - z0) * t }, false));
  }
}

// ─── LAYOUT: 4 rows × 10 lots (5 per block), each row faces its street ──────
const HOUSE_SCALE = 1.25;
const LOT_W = 10.5;
const LOTS_PER_BLOCK = 5;
const sidewalkEdge = (roadZ, side) => roadZ + side * (ROAD_W / 2 + SIDEWALK_W);
const sidewalkEdgeX = (roadX, side) => roadX + side * (ROAD_W / 2 + SIDEWALK_W);

// Blocks are centered between vertical streets
const BLOCKS = [0, 1].map((b) => {
  const left = sidewalkEdgeX(VERT_X[b], +1);
  const right = sidewalkEdgeX(VERT_X[b + 1], -1);
  const start = (left + right) / 2 - (LOTS_PER_BLOCK * LOT_W) / 2;
  return { start, lots: Array.from({ length: LOTS_PER_BLOCK }, (_, c) => start + LOT_W * (c + 0.5)) };
});
const lotXs = BLOCKS.flatMap((b) => b.lots);

const HOUSE_ROWS = [
  { face: +1, roadZ: MAIN_ROAD_Z, edge: sidewalkEdge(MAIN_ROAD_Z, -1) },
  { face: -1, roadZ: STREET_Z[0], edge: sidewalkEdge(STREET_Z[0], +1) },
];

let seed = 7;
const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);

const HOUSE_LOTS = []; // per house: driveway + door positions in world space (for pickups)
let houseCount = 0;
HOUSE_ROWS.forEach((row) => {
  const S = HOUSE_SCALE;
  const originZ = row.edge - row.face * (HOUSE_LOT_FRONT * S + 0.15);
  const rearZ = originZ - row.face * 2.6 * S;
  const fenceFrontZ = row.edge - row.face * 0.8;

  lotXs.forEach((x) => {
    const mirror = rnd() < 0.5;
    const h = buildHouse(Math.floor(rnd() * HOUSE_PALETTES.length), mirror);
    h.scale.multiplyScalar(S);
    h.position.set(x + (rnd() - 0.5) * 0.4, 0, originZ);
    h.rotation.y = row.face > 0 ? 0 : Math.PI;
    worldGroup.add(h);
    const lx = (v) => h.position.x + v * S * row.face * (mirror ? -1 : 1);
    HOUSE_LOTS.push({
      x: h.position.x,
      face: row.face,
      roadZ: row.roadZ,
      drivewayX: lx(-1.9),
      parkPoint: new THREE.Vector3(lx(-1.9), 0, originZ + row.face * 6.6), // rear stays clear of the garage face
      doorPoint: new THREE.Vector3(lx(-0.1), 0.45, originZ + row.face * 4.2 * S),
    });
    houseCount++;
  });

  BLOCKS.forEach((b) => {
    const x0 = b.start;
    const x1 = b.start + LOTS_PER_BLOCK * LOT_W;
    addFence(x0, rearZ, x1, rearZ);
    for (let c = 0; c <= LOTS_PER_BLOCK; c++) {
      const fx = x0 + c * LOT_W;
      addFence(fx, rearZ, fx, fenceFrontZ);
    }
  });
});
console.log(`Built ${houseCount} procedural houses on the front street`);

// Street trees along the front street and sidewalk
lotXs.forEach((x, i) => {
  if (i % LOTS_PER_BLOCK === LOTS_PER_BLOCK - 1) return;
  const tx = x + LOT_W / 2;
  worldGroup.add(buildTree(tx, sidewalkEdge(MAIN_ROAD_Z, -1) - 0.9, 0.95 + rnd() * 0.35));
  worldGroup.add(buildTree(tx, sidewalkEdge(STREET_Z[0], +1) + 0.9, 0.95 + rnd() * 0.35));
});
for (let x = DISTRICT_X_MIN + 3; x < WORLD.xMax - 2; x += 6 + rnd() * 2) {
  worldGroup.add(buildTree(x, sidewalkEdge(STREET_Z[0], -1) - 2.5, 1.1 + rnd() * 0.5));
}

// ─── VEHICLES: poly.pizza models, lane paths, company trucks with pickups ────
// Models: Truck + Police Car (Quaternius, CC0), 2015 Dodge Challenger (Grzybek, CC BY),
// CAR (Ignition Labs, CC BY). All face +Z after preparation; ground at y=0.
const VEHICLE_DEFS = {
  police: { file: "models/pp_police.glb", scale: 1.05, wheelRe: /wheel/i, wheelGroups: false, wheelRadius: 0.28 },
  muscle: { file: "models/pp_challenger.glb", scale: 0.43, wheelRe: /^Wheel00\d$/, wheelGroups: true, wheelRadius: 0.37, strip: /^(Light|Camera)$/ },
  sport: { file: "models/pp_sport.glb", scale: 0.0095, wheelRe: /Wheel_/, wheelGroups: false, wheelRadius: 0.33 },
};
function prepVehicle(gltf, def) {
  const inner = gltf.scene;
  if (def.strip) {
    const rm = [];
    inner.traverse((o) => def.strip.test(o.name) && rm.push(o));
    rm.forEach((o) => o.parent.remove(o));
  }
  const wheelNames = new Set();
  inner.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
    if (!def.wheelRe.test(o.name)) return;
    if (def.wheelGroups) {
      if (!o.isMesh) wheelNames.add(o.name);
      return;
    }
    // Wheel mesh whose pivot sits at the model origin: move the pivot to the wheel centre
    if (o.isMesh && o.position.lengthSq() < 1e-8) {
      o.geometry = o.geometry.clone();
      o.geometry.computeBoundingBox();
      const c = o.geometry.boundingBox.getCenter(new THREE.Vector3());
      o.geometry.translate(-c.x, -c.y, -c.z);
      o.position.copy(c);
      wheelNames.add(o.name);
    }
  });

  const root = new THREE.Group();
  inner.scale.setScalar(def.scale);
  root.add(inner);
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);
  const c = box.getCenter(new THREE.Vector3());
  inner.position.set(-c.x, -box.min.y, -c.z);
  return { root, wheelNames, def, length: box.max.z - box.min.z };
}

const prefabs = {};
function spawnVehicle(kind) {
  if (kind === "truck") return buildVan();
  const p = prefabs[kind];
  const root = p.root.clone();
  const wheels = [];
  root.traverse((o) => p.wheelNames.has(o.name) && wheels.push(o));
  return { root, wheels, wheelRadius: p.def.wheelRadius };
}

// Front wheels get a pivot so they can steer; call while the root is still at the origin
function addSteering(v) {
  v.root.updateMatrixWorld(true);
  const info = v.wheels.map((w) => ({ w, z: w.getWorldPosition(new THREE.Vector3()).z }));
  const zs = info.map((i) => i.z);
  const mid = (Math.max(...zs) + Math.min(...zs)) / 2;
  v.steer = [];
  v.steerAngle = 0;
  info
    .filter((i) => i.z > mid)
    .forEach(({ w }) => {
      const pivot = new THREE.Group();
      pivot.position.copy(w.position);
      w.parent.add(pivot);
      pivot.add(w);
      w.position.set(0, 0, 0);
      v.steer.push(pivot);
    });
}

// Amber indicators for loaded car models: small glow dots near the corners, only visible while blinking
const signalDotGeo = new THREE.SphereGeometry(0.09, 10, 8);
function addSignals(v) {
  const box = new THREE.Box3().setFromObject(v.root);
  const mats = {
    signalL: new THREE.MeshBasicMaterial({ color: 0xffb000 }),
    signalR: new THREE.MeshBasicMaterial({ color: 0xffb000 }),
  };
  const y = box.min.y + (box.max.y - box.min.y) * 0.38;
  v.signalMeshes = { L: [], R: [] };
  [box.max.z - 0.22, box.min.z + 0.22].forEach((z) =>
    [-1, 1].forEach((side) => {
      const m = new THREE.Mesh(signalDotGeo, side > 0 ? mats.signalL : mats.signalR);
      m.position.set(side * (box.max.x - 0.2), y, z);
      m.visible = false;
      v.root.add(m);
      v.signalMeshes[side > 0 ? "L" : "R"].push(m);
    })
  );
  v.lights = mats;
}

// ── Lane path builder: right-hand traffic, rounded corners ──
const CORNER_R = 7.5;
function buildLanePath(corners) {
  const n = corners.length;
  const segs = corners.map((a, i) => {
    const b = corners[(i + 1) % n];
    const dir = new THREE.Vector3(b.x - a.x, 0, b.z - a.z).normalize();
    return { dir, right: new THREE.Vector3(-dir.z, 0, dir.x), a: new THREE.Vector3(a.x, 0, a.z), b: new THREE.Vector3(b.x, 0, b.z) };
  });
  const path = new THREE.CurvePath();
  for (let i = 0; i < n; i++) {
    const prev = segs[(i - 1 + n) % n];
    const cur = segs[i];
    const nxt = segs[(i + 1) % n];
    const cornerA = cur.a.clone().addScaledVector(prev.right, LANE_OFFSET).addScaledVector(cur.right, LANE_OFFSET);
    const cornerB = cur.b.clone().addScaledVector(cur.right, LANE_OFFSET).addScaledVector(nxt.right, LANE_OFFSET);
    const start = cornerA.clone().addScaledVector(cur.dir, CORNER_R);
    const end = cornerB.clone().addScaledVector(cur.dir, -CORNER_R);
    const arcEnd = cornerB.clone().addScaledVector(nxt.dir, CORNER_R);
    path.add(new THREE.LineCurve3(start, end));
    path.add(new THREE.QuadraticBezierCurve3(end, cornerB, arcEnd));
  }
  path.getLengths(800);
  return path;
}

function nearestS(path, length, target, samples = 1200) {
  let best = 0;
  let bestD = Infinity;
  for (let i = 0; i < samples; i++) {
    const dd = path.getPointAt(i / samples).distanceToSquared(target);
    if (dd < bestD) {
      bestD = dd;
      best = (i / samples) * length;
    }
  }
  return { s: best, d: Math.sqrt(bestD) };
}

// ── Company branding (real Дархост logo: brand/logo-*.svg) ──
const BRAND = { navy: "#033D53", green: "#52B369", navyHex: 0x033d53, greenHex: 0x52b369 };
function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => {
      console.warn("Logo image failed:", src);
      resolve(null);
    };
    img.src = src;
  });
}
function makeCanvasTexture(w, h, draw) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.encoding = THREE.sRGBEncoding;
  t.anisotropy = 8;
  return t;
}
const brandTex = {};
function buildBrandTextures(logoH, logoM, logoDark) {
  brandTex.sign = makeCanvasTexture(1600, 152, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    if (logoDark) {
      const lw = (h - 20) * (logoDark.width / logoDark.height);
      ctx.drawImage(logoDark, (w - lw) / 2, 10, lw, h - 20);
    }
  });
  facadeSignMat.map = brandTex.sign;
  facadeSignMat.needsUpdate = true;
  // Side livery for the cargo box (3.45m × 2.0m)
  brandTex.side = makeCanvasTexture(1725, 1000, (ctx, w, h) => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    // Navy skirt with green swoosh
    ctx.fillStyle = BRAND.navy;
    ctx.beginPath();
    ctx.moveTo(0, h - 230);
    ctx.quadraticCurveTo(w * 0.45, h - 330, w, h - 200);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = BRAND.green;
    ctx.beginPath();
    ctx.moveTo(0, h - 262);
    ctx.quadraticCurveTo(w * 0.45, h - 362, w, h - 232);
    ctx.lineTo(w, h - 200);
    ctx.quadraticCurveTo(w * 0.45, h - 330, 0, h - 230);
    ctx.closePath();
    ctx.fill();
    if (logoH) ctx.drawImage(logoH, 90, 70, 1060, (1060 * logoH.height) / logoH.width);
    ctx.fillStyle = BRAND.navy;
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.font = "700 92px Inter, Arial, sans-serif";
    ctx.fillText("ХИМЧИСТКА КОВРОВ", 96, 560);
    ctx.font = "500 60px Inter, Arial, sans-serif";
    ctx.fillStyle = "#1f4d60";
    ctx.fillText("Заберём и привезём обратно", 98, 645);
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 64px Inter, Arial, sans-serif";
    ctx.fillText("darkhost.tj", 96, h - 78);
    ctx.textAlign = "right";
    ctx.font = "600 52px Inter, Arial, sans-serif";
    ctx.fillText("Выезд на дом", w - 80, h - 82);
  });
  // Rear doors (2.0m × 2.05m)
  brandTex.rear = makeCanvasTexture(1000, 1025, (ctx, w, h) => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = BRAND.navy;
    ctx.fillRect(0, h - 250, w, 250);
    ctx.fillStyle = BRAND.green;
    ctx.fillRect(0, h - 278, w, 28);
    if (logoM) ctx.drawImage(logoM, w / 2 - 190, 60, 380, (380 * logoM.height) / logoM.width);
    ctx.fillStyle = BRAND.navy;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.font = "700 122px Inter, Arial, sans-serif";
    ctx.fillText("Дархост", w / 2, 560);
    ctx.font = "500 48px Inter, Arial, sans-serif";
    ctx.fillStyle = "#1f4d60";
    ctx.fillText("химчистка ковров · доставка", w / 2, 630);
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 62px Inter, Arial, sans-serif";
    ctx.fillText("darkhost.tj", w / 2, h - 100);
    // Door split line + handles
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.fillRect(w / 2 - 4, 0, 8, h);
    ctx.fillStyle = "#1f2937";
    ctx.fillRect(w / 2 - 110, 690, 70, 16);
    ctx.fillRect(w / 2 + 40, 690, 70, 16);
  });
  // Cab door badge (0.8m × 0.32m)
  brandTex.cab = makeCanvasTexture(800, 320, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    if (logoH) ctx.drawImage(logoH, 20, 30, 760, (760 * logoH.height) / logoH.width);
  });
}
function makePlateTex(text) {
  return makeCanvasTexture(512, 112, (ctx, w, h) => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#111";
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, w - 8, h - 8);
    ctx.fillStyle = "#1d4ed8";
    ctx.fillRect(8, 8, 46, h - 16);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 22px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("TJ", 31, h / 2);
    ctx.fillStyle = "#111";
    ctx.font = "bold 72px Arial";
    ctx.fillText(text, w / 2 + 22, h / 2 + 2);
  });
}
function decal(tex, w, h, pos, rotY, transparent = false) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.45, metalness: 0.05, transparent, polygonOffset: true, polygonOffsetFactor: -1 }));
  m.position.set(pos.x, pos.y, pos.z);
  m.rotation.y = rotY;
  return m;
}

// ── Company van (Sprinter-style, procedural, livery baked on the body) ──
const vanMats = {
  body: new THREE.MeshStandardMaterial({ color: 0xf5f7f8, roughness: 0.32, metalness: 0.12 }),
  navy: new THREE.MeshStandardMaterial({ color: 0x021e2b, roughness: 0.6 }),
  glass: new THREE.MeshStandardMaterial({ color: 0x1f2c36, roughness: 0.08, metalness: 0.5 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x23272b, roughness: 0.7 }),
  arch: new THREE.MeshStandardMaterial({ color: 0x15181b, roughness: 0.95 }),
  tire: new THREE.MeshStandardMaterial({ color: 0x1a1c1f, roughness: 0.95 }),
  rim: new THREE.MeshStandardMaterial({ color: 0xd4d7db, roughness: 0.3, metalness: 0.7 }),
  chrome: new THREE.MeshStandardMaterial({ color: 0xc9ced4, roughness: 0.25, metalness: 0.8 }),
};
// Body extrusion has a 0.06 bevel, so the outer faces sit 0.06 beyond the profile
const VAN = { len: 5.47, halfW: 1.06, rearZ: -2.76, frontZ: 2.71 };

let vanBodyGeo = null;
function getVanBodyGeo() {
  if (vanBodyGeo) return vanBodyGeo;
  const s = new THREE.Shape();
  s.moveTo(-2.45, 0.42);
  s.lineTo(-2.7, 0.6);
  s.lineTo(-2.7, 2.28);
  s.quadraticCurveTo(-2.7, 2.62, -2.34, 2.62);
  s.lineTo(0.72, 2.62);
  s.quadraticCurveTo(1.1, 2.62, 1.28, 2.36);
  s.lineTo(1.86, 1.62);
  s.quadraticCurveTo(1.98, 1.46, 2.18, 1.44);
  s.lineTo(2.5, 1.38);
  s.quadraticCurveTo(2.65, 1.34, 2.65, 1.14);
  s.lineTo(2.65, 0.6);
  s.lineTo(2.4, 0.42);
  s.closePath();
  const geo = new THREE.ExtrudeGeometry(s, { depth: 2.0, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 3 });
  geo.translate(0, 0, -1.0);
  geo.rotateY(-Math.PI / 2);
  vanBodyGeo = geo;
  return geo;
}

function buildVan() {
  const g = new THREE.Group();
  const W = VAN.halfW;
  const body = new THREE.Mesh(getVanBodyGeo(), vanMats.body);
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  // Livery panels flush with the body sides / rear, small logo on the cab doors
  if (brandTex.side) {
    g.add(decal(brandTex.side, 3.45, 2.0, { x: W + 0.004, y: 1.52, z: -0.98 }, Math.PI / 2));
    g.add(decal(brandTex.side, 3.45, 2.0, { x: -W - 0.004, y: 1.52, z: -0.98 }, -Math.PI / 2));
    // Rear doors: two hinged panels carrying each half of the rear livery; dark cargo bay behind them
    const bay = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 2.05), new THREE.MeshStandardMaterial({ color: 0x2a2e33, roughness: 0.95 }));
    bay.position.set(0, 1.6, VAN.rearZ + 0.02);
    bay.rotation.y = Math.PI;
    g.add(bay);
    g.userData.doors = [1, -1].map((side) => {
      const tex = brandTex.rear.clone();
      tex.needsUpdate = true;
      tex.repeat.set(0.5, 1);
      tex.offset.set(side > 0 ? 0 : 0.5, 0);
      const pivot = new THREE.Group();
      pivot.position.set(side * 1.0, 1.6, VAN.rearZ - 0.006);
      const panel = decal(tex, 1.0, 2.05, { x: -side * 0.5, y: 0, z: 0 }, Math.PI);
      panel.castShadow = true;
      const back = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.05, 0.05), vanMats.body);
      back.position.set(-side * 0.5, 0, 0.03);
      pivot.add(panel, back);
      pivot.userData.side = side;
      g.add(pivot);
      return pivot;
    });
    g.add(decal(brandTex.cab, 0.8, 0.32, { x: W + 0.004, y: 1.12, z: 1.28 }, Math.PI / 2, true));
    g.add(decal(brandTex.cab, 0.8, 0.32, { x: -W - 0.004, y: 1.12, z: 1.28 }, -Math.PI / 2, true));
  }

  // Windshield, cab side windows, door seams, mirrors, handles
  const wind = new THREE.Mesh(new THREE.PlaneGeometry(1.86, 0.98), vanMats.glass);
  wind.position.set(0, 2.045, 1.655);
  wind.rotation.x = -0.66;
  g.add(wind);
  [-1, 1].forEach((side) => {
    g.add(createBox(0.03, 0.66, 0.92, vanMats.glass, { x: side * (W + 0.005), y: 1.95, z: 1.26 }, false));
    g.add(createBox(0.02, 1.7, 0.03, vanMats.dark, { x: side * (W + 0.006), y: 1.35, z: 0.78 }, false));
    g.add(createBox(0.02, 1.7, 0.03, vanMats.dark, { x: side * (W + 0.006), y: 1.35, z: -0.62 }, false));
    g.add(createBox(0.02, 0.05, 0.22, vanMats.dark, { x: side * (W + 0.008), y: 1.28, z: 0.55 }, false));
    g.add(createBox(0.02, 0.05, 0.22, vanMats.dark, { x: side * (W + 0.008), y: 1.28, z: -0.4 }, false));
    g.add(createBox(0.1, 0.22, 0.08, vanMats.dark, { x: side * (W + 0.17), y: 1.78, z: 1.78 }, false));
    g.add(createBox(0.14, 0.04, 0.04, vanMats.dark, { x: side * (W + 0.07), y: 1.8, z: 1.78 }, false));
  });

  // Bumpers, grille, front badge, roof marker strip
  g.add(createBox(2.16, 0.3, 0.3, vanMats.dark, { x: 0, y: 0.56, z: VAN.frontZ - 0.1 }, false));
  g.add(createBox(2.16, 0.3, 0.3, vanMats.dark, { x: 0, y: 0.56, z: VAN.rearZ + 0.1 }, false));
  g.add(createBox(1.15, 0.26, 0.05, vanMats.navy, { x: 0, y: 1.0, z: VAN.frontZ + 0.01 }, false));
  [-0.3, 0, 0.3].forEach((x) => g.add(createBox(0.04, 0.22, 0.06, vanMats.chrome, { x, y: 1.0, z: VAN.frontZ + 0.02 }, false)));
  g.add(createBox(0.5, 0.06, 0.05, vanMats.chrome, { x: 0, y: 1.24, z: VAN.frontZ + 0.01 }, false));
  g.add(createBox(1.6, 0.04, 0.16, vanMats.navy, { x: 0, y: 2.67, z: 0.2 }, false));

  // Wheel arches + wheels
  const archGeo = new THREE.CylinderGeometry(0.56, 0.56, 2.18, 20, 1, false, 0, Math.PI);
  archGeo.rotateZ(Math.PI / 2);
  const tireGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.27, 22);
  tireGeo.rotateZ(Math.PI / 2);
  const rimGeo = new THREE.CylinderGeometry(0.23, 0.23, 0.29, 14);
  rimGeo.rotateZ(Math.PI / 2);
  const wheels = [];
  [1.62, -1.52].forEach((z) => {
    const arch = new THREE.Mesh(archGeo, vanMats.arch);
    arch.position.set(0, 0.42, z);
    g.add(arch);
    [-1, 1].forEach((side) => {
      const w = new THREE.Group();
      const tire = new THREE.Mesh(tireGeo, vanMats.tire);
      tire.castShadow = true;
      const rim = new THREE.Mesh(rimGeo, vanMats.rim);
      w.add(tire, rim);
      w.position.set(side * 0.97, 0.38, z);
      g.add(w);
      wheels.push(w);
    });
  });

  return { root: g, wheels, wheelRadius: 0.38, doors: g.userData.doors || [] };
}

// ── Lights ──
const lightMats = () => ({
  head: new THREE.MeshStandardMaterial({ color: 0xe8ecef, roughness: 0.15, metalness: 0.3 }),
  tail: new THREE.MeshStandardMaterial({ color: 0xff4d4d, emissive: 0xd10000, emissiveIntensity: 0.8 }),
  reverse: new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.0 }),
  signalL: new THREE.MeshStandardMaterial({ color: 0xffb300, emissive: 0xff8f00, emissiveIntensity: 0.0 }),
  signalR: new THREE.MeshStandardMaterial({ color: 0xffb300, emissive: 0xff8f00, emissiveIntensity: 0.0 }),
});

function addTruckDressing(truck, plateText) {
  const r = truck.root;
  const mats = lightMats();
  truck.lights = mats;
  const plate = makePlateTex(plateText);
  r.add(decal(plate, 0.52, 0.115, { x: 0, y: 0.56, z: VAN.rearZ - 0.06 }, Math.PI));
  r.add(decal(plate, 0.52, 0.115, { x: 0, y: 0.56, z: VAN.frontZ + 0.06 }, 0));

  // Object3D.lookAt leaves local +X on the vehicle's LEFT side
  [-1, 1].forEach((side) => {
    const sig = side > 0 ? mats.signalL : mats.signalR;
    r.add(createBox(0.44, 0.2, 0.06, mats.head, { x: side * 0.72, y: 1.02, z: VAN.frontZ + 0.02 }, false));
    r.add(createBox(0.2, 0.08, 0.06, sig, { x: side * 0.98, y: 1.02, z: VAN.frontZ + 0.02 }, false));
    r.add(createBox(0.14, 0.42, 0.06, mats.tail, { x: side * 0.9, y: 1.62, z: VAN.rearZ - 0.02 }, false));
    r.add(createBox(0.14, 0.18, 0.06, mats.reverse, { x: side * 0.9, y: 1.28, z: VAN.rearZ - 0.02 }, false));
    r.add(createBox(0.14, 0.18, 0.06, sig, { x: side * 0.9, y: 1.94, z: VAN.rearZ - 0.02 }, false));
  });

  // Two rolled carpets: the dirty one collected at a house, the clean one brought back
  truck.carpetDirty = makeCarpet(0x9b2c2c, 0xe0c9a6);
  truck.carpetClean = makeCarpet(0xd9c7a3, 0x8b6f47);
}

const carpetGeo = new THREE.CylinderGeometry(0.24, 0.24, 1.7, 14).rotateZ(Math.PI / 2);
const carpetEndGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.08, 14).rotateZ(Math.PI / 2);
function makeCarpet(color, endColor) {
  const carpet = new THREE.Mesh(carpetGeo, new THREE.MeshStandardMaterial({ color, roughness: 0.9 }));
  const end = new THREE.Mesh(carpetEndGeo, new THREE.MeshStandardMaterial({ color: endColor, roughness: 0.9 }));
  end.position.x = 0.85;
  carpet.add(end);
  carpet.castShadow = true;
  carpet.visible = false;
  worldGroup.add(carpet);
  return carpet;
}

// Moves a carpet from → to while p runs a..b; shown a little before/after the move
function animateCarpet(mesh, from, to, p, a, b, yaw) {
  mesh.visible = p > a - 0.12 && p < b + 0.12;
  if (!mesh.visible) return;
  const k = THREE.MathUtils.smoothstep(p, a, b);
  mesh.position.lerpVectors(from, to, k);
  mesh.position.y += Math.sin(k * Math.PI) * 0.5;
  mesh.rotation.set(0, yaw, 0);
}

// ── Routes (loops chosen so the served houses are on the truck's right side) ──
const V = VERT_X;
const MAIN = MAIN_ROAD_Z;
const S1 = STREET_Z[0];
const W = WEST_X;
const P = (x, z) => ({ x, z });
// Every loop passes the campus docks on street 1 heading east (docks on the right).
// Stops run in loop order and repeat: pickup at a house → dock (unload dirty, load clean) → deliver.
const TRUCK_ROUTES = [
  {
    plate: "0101 DH 01",
    loop: [P(V[1], MAIN), P(W, MAIN), P(W, S1), P(V[1], S1)],
    start: 0.02,
    stops: [{ house: 2, kind: "pickup" }, { dock: 0, kind: "dock" }, { house: 12, kind: "deliver" }, { house: 3, kind: "pickup" }, { dock: 0, kind: "dock" }, { house: 13, kind: "deliver" }],
  },
  {
    plate: "0102 DH 01",
    loop: [P(V[2], MAIN), P(W, MAIN), P(W, S1), P(V[2], S1)],
    start: 0.5,
    stops: [{ house: 7, kind: "pickup" }, { dock: 1, kind: "dock" }, { house: 17, kind: "deliver" }, { house: 8, kind: "pickup" }, { dock: 1, kind: "dock" }, { house: 16, kind: "deliver" }],
  },
  {
    plate: "0103 DH 01",
    loop: [P(V[2], MAIN), P(W, MAIN), P(W, S1), P(V[2], S1)],
    start: 0.2,
    stops: [
      { house: 4, kind: "pickup" },
      { dock: 2, kind: "dock" },
      { house: 10, kind: "deliver" },
      { house: 1, kind: "pickup" },
      { dock: 2, kind: "dock" },
      { house: 15, kind: "deliver" },
    ],
  },
];
const DOCK_TARGETS = DOCK_BAYS.map((b) => ({
  drivewayX: b.x,
  roadZ: S1,
  parkPoint: new THREE.Vector3(b.x, 0, CAMPUS.zBack - 3.9),
  doorPoint: new THREE.Vector3(b.x, 0.9, CAMPUS.zBack + 0.6),
}));
const CIVIL_ROUTES = [
  { kind: "police", loop: [P(W, MAIN), P(V[2], MAIN), P(V[2], S1), P(W, S1)], start: 0.1, maxSpeed: 6.5 },
  { kind: "muscle", loop: [{ x: V[0], z: MAIN }, { x: V[2], z: MAIN }, { x: V[2], z: S1 }, { x: V[0], z: S1 }], start: 0.6, maxSpeed: 6 },
  // More cars on different loops (both directions) so every block carries traffic
  { kind: "muscle", loop: [P(W, S1), P(V[2], S1), P(V[2], MAIN), P(W, MAIN)], start: 0.35, maxSpeed: 6.2 },
  { kind: "muscle", loop: [P(V[1], S1), P(V[0], S1), P(V[0], MAIN), P(V[1], MAIN)], start: 0.55, maxSpeed: 5.8 },
  { kind: "police", loop: [P(V[2], MAIN), P(V[1], MAIN), P(V[1], S1), P(V[2], S1)], start: 0.7, maxSpeed: 6.4 },
  { kind: "muscle", loop: [P(V[0], S1), P(V[2], S1), P(V[2], MAIN), P(V[0], MAIN)], start: 0.25, maxSpeed: 6.0 },
];

const vehicles = [];
const PAST_DRIVEWAY = 6.8; // how far the truck drives past the driveway before reversing in
const HOLD_BACK = 18; // holding point before the turn-in point: clear of every neighbouring dock's manoeuvring area

function makeDriver(kind, route, opts) {
  const path = buildLanePath(route.loop);
  const length = path.getLength();
  const v = spawnVehicle(kind);
  worldGroup.add(v.root);
  const d = Object.assign(v, {
    kind,
    path,
    length,
    s: route.start * length,
    speed: 0,
    prevSpeed: 0,
    maxSpeed: 8,
    accel: 4,
    state: "drive",
    stops: [],
    nextStop: 0,
    timer: 0,
    signal: null,
    lights: null,
  }, opts);
  vehicles.push(d);
  return d;
}

function placeOnPath(v, s) {
  const u = ((s % v.length) + v.length) % v.length / v.length;
  const p = v.path.getPointAt(u);
  const t = v.path.getTangentAt(u);
  const lat = v.lat || 0; // >0 right of the lane, <0 left (oncoming lane) while overtaking
  v.root.position.set(p.x - t.z * lat, ROAD_TOP, p.z + t.x * lat);
  v.root.lookAt(p.x + t.x - t.z * lat, ROAD_TOP, p.z + t.z + t.x * lat);
  return t;
}

function setSignal(v, side) {
  v.signal = side;
}

const _fwd = new THREE.Vector3();
const _ofwd = new THREE.Vector3();
const _d = new THREE.Vector3();
// Nearest vehicle ahead in the same lane (or crossing right in front); returns {gap, speed}
function obstacleAhead(v, range = 16) {
  _fwd.set(0, 0, 1).applyQuaternion(v.root.quaternion);
  let best = null;
  for (const o of vehicles) {
    if (o === v || o === v.overtaking) continue;
    _d.subVectors(o.root.position, v.root.position);
    const along = _d.dot(_fwd);
    if (along < 0.5 || along > range) continue;
    const lateral = Math.abs(_fwd.x * _d.z - _fwd.z * _d.x);
    _ofwd.set(0, 0, 1).applyQuaternion(o.root.quaternion);
    const dot = _fwd.dot(_ofwd);
    const crossing = Math.abs(dot) < 0.5;
    if (crossing) {
      // Only yield to crossing traffic that is actually moving; the lower index goes first when both stopped
      if (lateral > 3.5 || along > 9) continue;
      if (o.speed < 0.3 && (v.speed < 0.3 ? vehicles.indexOf(o) > vehicles.indexOf(v) : true)) continue;
    } else {
      if (lateral > 2.0) continue;
      if (dot < -0.5) continue; // oncoming lane
    }
    // Leave room behind a van that is about to park or is manoeuvring
    const extra = o.state !== "drive" || o.approaching ? 9 : 0;
    if (!best || along < best.along) best = { along, speed: o.speed, extra };
  }
  if (!best) return null;
  return { gap: best.along - 5.6 - best.extra, speed: best.speed };
}

// Any vehicle behind us in our lane that would be hit while reversing:
// moving traffic within `range`, or anything (even stopped) within 8 m.
// A car queued further back has stopped *for us* — waiting for it would deadlock.
function vehicleBehind(v, range) {
  _fwd.set(0, 0, 1).applyQuaternion(v.root.quaternion);
  return vehicles.some((o) => {
    if (o === v) return false;
    _d.subVectors(o.root.position, v.root.position);
    const along = _d.dot(_fwd);
    const lateral = Math.abs(_fwd.x * _d.z - _fwd.z * _d.x);
    if (!(along < 0 && lateral < 3.5)) return false;
    return along > -8 || (o.speed > 0.5 && along > -range);
  });
}

// A company van stopped in our lane (waiting to reverse into a driveway, or reversing) close ahead
function stoppedVanAhead(v) {
  _fwd.set(0, 0, 1).applyQuaternion(v.root.quaternion);
  for (const o of vehicles) {
    if (o === v || o.kind !== "truck") continue;
    _d.subVectors(o.root.position, v.root.position);
    const along = _d.dot(_fwd);
    const lateral = Math.abs(_fwd.x * _d.z - _fwd.z * _d.x);
    if (along > 0.5 && along < 20 && lateral < 2.2 && o.speed < 0.3 && (o.state !== "drive" || o.committed || o.holding)) return o;
  }
  return null;
}
// Nothing coming towards us in the oncoming lane for the length of an overtake
function oncomingClear(v, range = 55) {
  _fwd.set(0, 0, 1).applyQuaternion(v.root.quaternion);
  return !vehicles.some((o) => {
    if (o === v) return false;
    _d.subVectors(o.root.position, v.root.position);
    const along = _d.dot(_fwd);
    const lateral = Math.abs(_fwd.x * _d.z - _fwd.z * _d.x);
    _ofwd.set(0, 0, 1).applyQuaternion(o.root.quaternion);
    return along > -4 && along < range && lateral < 7 && _fwd.dot(_ofwd) < -0.5 && o.speed > 0.3;
  });
}
// Civilian cars: pull out into the oncoming lane to pass a van that has stopped to park, then merge back
const OVERTAKE_ENABLED = false; // off: pulling into the oncoming lane read as driving against traffic
function updateOvertake(v, dt) {
  if (v.stops.length || !OVERTAKE_ENABLED) { v.lat = 0; v.overtaking = null; return; } // company vans never overtake
  if (!v.overtaking) {
    const van = v.speed < 0.8 ? stoppedVanAhead(v) : null;
    if (van && oncomingClear(v)) v.overtaking = van;
  } else {
    _fwd.set(0, 0, 1).applyQuaternion(v.root.quaternion);
    _d.subVectors(v.overtaking.root.position, v.root.position);
    const along = _d.dot(_fwd);
    if (along < -9 || _d.length() > 35) v.overtaking = null;
  }
  const targetLat = v.overtaking ? -2 * LANE_OFFSET : 0;
  v.lat = (v.lat || 0) + (targetLat - (v.lat || 0)) * Math.min(1, dt * 2.2);
  if (Math.abs(v.lat) < 0.02) v.lat = 0;
}

function updateDriver(v, dt, time) {
  v.prevSpeed = v.speed;
  if (v.state === "drive") updateOvertake(v, dt);
  const blinkOn = (time % 0.9) < 0.45;

  if (v.state === "drive") {
    let target = v.maxSpeed;
    let stop = null;
    if (v.stops.length) {
      stop = v.stops[v.nextStop];
      let dist = stop.s - v.s;
      if (dist < 0) dist += v.length;
      const brake = 12;
      v.approaching = dist < 30;
      // Holding point well before the driveway (outside every other dock's manoeuvring area):
      // wait here while another van is committed to / busy at the docks, or traffic is right behind us
      if (!v.committed) {
        const holdS = (stop.s - HOLD_BACK + v.length) % v.length;
        let distHold = (holdS - v.s + v.length) % v.length;
        if (distHold > v.length - HOLD_BACK - 1) distHold = 0; // already past the hold point
        if (distHold < brake) target = Math.max(0.8, v.maxSpeed * (distHold / brake));
        if (distHold < 0.3 || v.holding) {
          // Only a van using the SAME driveway (parked there or committed to it) or one that is
          // manoeuvring across the lane right now blocks us; a van loading at a neighbouring dock does not
          const otherBusy = vehicles.some((o) => {
            if (o === v || o.root.position.distanceTo(v.root.position) > 40) return false;
            if (o.state === "reverse" || o.state === "exit") return true;
            const oStop = o.stops.length ? o.stops[o.nextStop] : null;
            return !!oStop && oStop.target === stop.target && (o.state !== "drive" || o.committed);
          });
          if (otherBusy || vehicleBehind(v, 14)) {
            v.holding = true;
            v.s = holdS;
            v.speed = 0;
            placeOnPath(v, v.s);
            setSignal(v, "hazard");
            return;
          }
          v.holding = false;
          v.committed = true;
        }
      }
      if (dist < brake) target = Math.max(0.8, v.maxSpeed * (dist / brake));
      if (v.committed && dist < 0.3) {
        // Last check before reversing: nothing moving right behind us
        if (vehicleBehind(v, 12)) {
          v.s = stop.s;
          v.speed = 0;
          placeOnPath(v, v.s);
          setSignal(v, "hazard");
          return;
        }
        v.approaching = false;
        v.state = "reverse";
        v.m = 0;
        v.speed = 0;
        const C = v.path.getPointAt(stop.laneS / v.length);
        const P1 = v.path.getPointAt(stop.s / v.length);
        v.curve = new THREE.QuadraticBezierCurve3(P1, C, stop.target.parkPoint.clone());
        v.curveLen = v.curve.getLength();
        v.exitCurve = new THREE.QuadraticBezierCurve3(stop.target.parkPoint.clone(), C, P1);
        v.exitLen = v.exitCurve.getLength();
        target = 0;
      }
    }
    // Slow down through corners
    const tNow = v.path.getTangentAt(v.s / v.length);
    const tAhead = v.path.getTangentAt(((v.s + 6) % v.length) / v.length);
    if (Math.abs(tNow.x * tAhead.z - tNow.z * tAhead.x) > 0.12) target = Math.min(target, 3.8);
    // Keep distance from the vehicle ahead
    if (typeof pedestrianOnCrossing === "function" && pedestrianOnCrossing(v)) target = 0;
    if (v.overtaking) target = Math.min(target, 5.0);
    const obs = obstacleAhead(v);
    if (obs) target = Math.min(target, obs.gap < 1.5 ? 0 : Math.max(0, obs.speed + (obs.gap - 1.5) * 0.7));
    v.speed += THREE.MathUtils.clamp(target - v.speed, -v.accel * dt * 2.2, v.accel * dt);
    v.s = (v.s + v.speed * dt) % v.length;
    const t0 = placeOnPath(v, v.s);
    const t1 = v.path.getTangentAt(((v.s + 4) % v.length) / v.length);
    const turn = t0.x * t1.z - t0.z * t1.x; // >0 → turning right
    const ahead = stop ? (stop.s - v.s + v.length) % v.length : Infinity;
    setSignal(v, Math.abs(turn) > 0.18 ? (turn > 0 ? "right" : "left") : ahead < 14 ? "right" : null);
  } else if (v.state === "reverse") {
    // Pause only for moving traffic; a van holding/queued nearby has already stopped for us
    const tooClose = vehicles.some((o) => o !== v && o.speed > 0.3 && o.root.position.distanceTo(v.root.position) < 6.5);
    v.speed += THREE.MathUtils.clamp((tooClose ? 0 : 2.6) - v.speed, -6 * dt, 2.2 * dt);
    v.m = Math.min(v.curveLen, v.m + v.speed * dt);
    const p = v.curve.getPointAt(v.m / v.curveLen);
    const t = v.curve.getTangentAt(v.m / v.curveLen);
    v.root.position.set(p.x, ROAD_TOP, p.z);
    v.root.lookAt(p.x - t.x, ROAD_TOP, p.z - t.z);
    setSignal(v, "hazard");
    if (v.m >= v.curveLen - 0.01) {
      v.state = "load";
      const stop = v.stops[v.nextStop];
      v.loadDur = stop.kind === "dock" ? 6.5 : 4.2;
      v.timer = v.loadDur;
      v.speed = 0;
    }
  } else if (v.state === "load") {
    v.speed = 0;
    setSignal(v, "hazard");
    const stop = v.stops[v.nextStop];
    if (!v.loadStarted) {
      // The driver steps out, opens the doors and carries the carpet; fall back to a timer until characters are loaded
      v.loadStarted = true;
      v.loadDone = false;
      if (!startLoading(v, stop)) v.timer = 5;
    }
    if (!v.driverP) { v.timer -= dt; if (v.timer <= 0) v.loadDone = true; }
    if (v.loadDone) {
      // Wait until the lane by the driveway is clear before pulling out (the routine ran once; do not restart it)
      // Moving traffic near the driveway blocks us; a car queued (stopped) behind does not
      const lane = v.path.getPointAt(stop.laneS / v.length);
      const busy = vehicles.some((o) => {
        if (o === v) return false;
        const d = o.root.position.distanceTo(lane);
        return o.speed > 0.5 ? d < 16 : d < 7 && !o.holding;
      });
      if (!busy) {
        v.loadStarted = false;
        v.state = "exit";
        v.m = 0;
      }
    }
  } else if (v.state === "exit") {
    v.speed += THREE.MathUtils.clamp(3.4 - v.speed, -6 * dt, 2.5 * dt);
    v.m = Math.min(v.exitLen, v.m + v.speed * dt);
    const p = v.exitCurve.getPointAt(v.m / v.exitLen);
    const t = v.exitCurve.getTangentAt(v.m / v.exitLen);
    v.root.position.set(p.x, ROAD_TOP, p.z);
    v.root.lookAt(p.x + t.x, ROAD_TOP, p.z + t.z);
    setSignal(v, "left");
    if (v.m >= v.exitLen - 0.01) {
      v.state = "drive";
      v.committed = false;
      v.s = v.stops[v.nextStop].s;
      v.nextStop = (v.nextStop + 1) % v.stops.length;
      v.speed = 3.4;
    }
  }

  const signedSpeed = v.state === "reverse" ? -v.speed : v.speed;
  v.wheels.forEach((w) => (w.rotation.x += (signedSpeed * dt) / v.wheelRadius));

  // Steering: front wheels point toward where the car is about to move (also when reversing)
  if (v.steer) {
    let look = null;
    if (v.state === "drive") look = v.path.getPointAt(((v.s + 3.2) % v.length) / v.length);
    else if (v.state === "reverse") look = v.curve.getPointAt(Math.min(1, (v.m + 2.4) / v.curveLen));
    else if (v.state === "exit") look = v.exitCurve.getPointAt(Math.min(1, (v.m + 2.4) / v.exitLen));
    let target = 0;
    if (look) {
      const local = v.root.worldToLocal(look.clone());
      target = THREE.MathUtils.clamp(Math.atan2(local.x, Math.max(0.4, Math.abs(local.z))) * 1.2, -0.6, 0.6);
    }
    v.steerAngle += (target - v.steerAngle) * Math.min(1, dt * 7);
    v.steer.forEach((p) => (p.rotation.y = v.steerAngle));
  }

  if (v.lights) {
    const braking = v.speed < v.prevSpeed - 0.02 || v.state === "load";
    if (v.lights.tail) v.lights.tail.emissiveIntensity = braking ? 2.4 : 0.8;
    if (v.lights.reverse) v.lights.reverse.emissiveIntensity = v.state === "reverse" ? 2.2 : 0;
    const l = (v.signal === "left" || v.signal === "hazard") && blinkOn ? 2.4 : 0;
    const r = (v.signal === "right" || v.signal === "hazard") && blinkOn ? 2.4 : 0;
    v.lights.signalL.emissiveIntensity = l;
    v.lights.signalR.emissiveIntensity = r;
    if (v.signalMeshes) {
      v.signalMeshes.L.forEach((m) => (m.visible = l > 0));
      v.signalMeshes.R.forEach((m) => (m.visible = r > 0));
    }
  }
}

function updateVehicles(dt, time) {
  vehicles.forEach((v) => {
    updateDriver(v, dt, time);
    if (v.doors && v.doors.length) {
      v.doorK = THREE.MathUtils.clamp((v.doorK || 0) + ((v.doorTarget || 0) > (v.doorK || 0) ? dt : -dt) * 1.1, 0, 1);
      v.doors.forEach((d) => (d.rotation.y = -d.userData.side * THREE.MathUtils.smoothstep(v.doorK, 0, 1) * 2.5));
    }
  });
}

function setupVehicles() {
  // Company trucks with pickup stops
  TRUCK_ROUTES.forEach((r) => {
    const truck = makeDriver("truck", r, { maxSpeed: 7, accel: 3.2 });
    addTruckDressing(truck, r.plate);
    addSteering(truck);
    truck.stops = r.stops
      .map((st) => {
        const target = st.kind === "dock" ? DOCK_TARGETS[st.dock] : HOUSE_LOTS[st.house];
        if (!target) return null;
        const near = nearestS(truck.path, truck.length, new THREE.Vector3(target.drivewayX, 0, target.roadZ));
        if (near.d > 4) {
          console.warn("Stop not on route", st);
          return null;
        }
        return { target, kind: st.kind, laneS: near.s, s: (near.s + PAST_DRIVEWAY) % truck.length };
      })
      .filter(Boolean);
    truck.nextStop = Math.max(0, truck.stops.findIndex((st) => st.s > truck.s));
    placeOnPath(truck, truck.s);
  });

  // Civilian traffic (no stops)
  CIVIL_ROUTES.forEach((r) => {
    const car = makeDriver(r.kind, r, { maxSpeed: r.maxSpeed, accel: 5 });
    addSignals(car);
    addSteering(car);
    placeOnPath(car, car.s);
  });

  // Residents' cars stand in their own driveways, and only at houses no van ever visits:
  // the street-side parking lane stays empty so a reversing van never sweeps through a parked car.
  const parkedKinds = ["muscle", "police", "muscle", "police", "muscle"];
  const served = new Set(TRUCK_ROUTES.flatMap((r) => r.stops.filter((st) => st.house != null).map((st) => st.house)));
  let pk = 0;
  HOUSE_LOTS.forEach((lot, i) => {
    if (served.has(i) || served.has(i - 1) || served.has(i + 1)) return; // keep the neighbours clear too
    if (rnd() > 0.5) return;
    const v = spawnVehicle(parkedKinds[pk++ % parkedKinds.length]);
    const z = lot.parkPoint.z - lot.face * 1.2; // a little deeper into the driveway than the van's stop point
    v.root.position.set(lot.drivewayX, ROAD_TOP, z);
    v.root.lookAt(lot.drivewayX, ROAD_TOP, z - lot.face * 4); // nose toward the garage
    worldGroup.add(v.root);
  });

  // Customer cars in the campus yard stalls (nose toward the building)
  [["muscle", -37], ["police", -31], ["muscle", -25], ["muscle", -19]].forEach(([kind, x]) => {
    const v = spawnVehicle(kind);
    v.root.position.set(x, ROAD_TOP, YARD.z1 - 3.0);
    v.root.lookAt(x, ROAD_TOP, YARD.z1);
    worldGroup.add(v.root);
  });
}

Promise.all([
  ...Object.entries(VEHICLE_DEFS).map(
    ([kind, def]) =>
      new Promise((resolve) =>
        gltfLoader.load(
          def.file,
          (gltf) => {
            prefabs[kind] = prepVehicle(gltf, def);
            resolve();
          },
          undefined,
          (err) => {
            console.warn("Could not load", def.file, err);
            resolve();
          }
        )
      )
  ),
  Promise.all([loadImage("brand/logo-horizontal.svg"), loadImage("brand/logo-mark.svg"), loadImage("brand/logo-horizontal-on-dark.svg")]).then(([h, m, d]) =>
    buildBrandTextures(h, m, d)
  ),
]).then(() => {
  const missing = Object.keys(VEHICLE_DEFS).filter((k) => !prefabs[k]);
  if (missing.length) {
    console.warn("Vehicles missing, skipping traffic:", missing);
    return;
  }
  setupVehicles();
});


// 3. 3D Characters
gltfLoader.load(
  "models/character.glb",
  (gltf) => {
    function addChar(pos, rotY) {
      const c = gltf.scene.clone();
      c.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      c.scale.set(0.9, 0.9, 0.9);
      c.position.set(pos.x, pos.y, pos.z);
      c.rotation.y = rotY;
      worldGroup.add(c);
    }

    // 1. Reception Staff behind front counter
    addChar({ x: 0, y: 0.0, z: 1.6 }, Math.PI);
    // 2. Customer in front of counter
    addChar({ x: 0.8, y: 0.0, z: 3.6 }, 0);
    // 3. Courier delivering package to first suburban house
    addChar({ x: 26.5, y: 0.0, z: 5.6 }, -Math.PI / 4);
    // 4. Workshop worker
    addChar({ x: 1.2, y: 0.0, z: -3.5 }, Math.PI / 2);
    // 5. Manager at desk
    addChar({ x: -8.5, y: 0.0, z: -3.8 }, 0);
  },
  undefined,
  (err) => console.warn("Character fallback", err)
);

// ─── INTERACTIVE HOTSPOTS ───────────────────────────────────────────────────
const hotspotElements = [];

ZONES_DATA.forEach((zone, index) => {
  const pin = document.createElement("div");
  pin.className = "hotspot-pin";
  pin.dataset.zoneIndex = index;
  pin.innerHTML = `<span>${zone.badgeText}</span>`;

  pin.addEventListener("click", (e) => {
    e.stopPropagation();
    selectZone(index);
  });

  hotspotsContainer.appendChild(pin);
  hotspotElements.push({ element: pin, pos3d: zone.hotspotPosition });
});

function updateHotspots() {
  const tempV = new THREE.Vector3();
  const widthHalf = window.innerWidth / 2;
  const heightHalf = window.innerHeight / 2;

  hotspotElements.forEach((h, index) => {
    tempV.copy(h.pos3d);
    tempV.project(camera);

    if (tempV.z < 1) {
      const x = tempV.x * widthHalf + widthHalf;
      const y = -(tempV.y * heightHalf) + heightHalf;
      h.element.style.left = `${x}px`;
      h.element.style.top = `${y}px`;
      h.element.style.display = "flex";

      if (index === currentZoneIndex) {
        h.element.classList.add("active");
      } else {
        h.element.classList.remove("active");
      }
    } else {
      h.element.style.display = "none";
    }
  });
}

// ─── INTERACTION: ZONE SELECTION & CAMERA LERP ──────────────────────────────
const detailPanel = document.getElementById("detailPanel");
const panelTitle = document.getElementById("panelTitle");
const panelSubtitle = document.getElementById("panelSubtitle");
const panelDesc = document.getElementById("panelDesc");
const panelCta = document.getElementById("panelCta");
const panelCtaText = document.getElementById("panelCtaText");
const panelFeatures = document.getElementById("panelFeatures");
const panelTags = document.getElementById("panelTags");
const filterPills = document.querySelectorAll(".pill-button");

function selectZone(index) {
  if (index < 0 || index >= ZONES_DATA.length) return;

  currentZoneIndex = index;
  const zone = ZONES_DATA[index];

  targetCameraLook.copy(zone.cameraTarget);
  targetCameraPos.copy(zone.cameraPosition);
  isAnimatingCamera = true;

  panelTitle.textContent = zone.title;
  panelSubtitle.textContent = zone.subtitle;
  panelDesc.textContent = zone.description;
  panelCtaText.textContent = zone.crmActionLabel || "Подробнее";
  panelCta.href = zone.crmHref || "#";

  panelFeatures.innerHTML = zone.features
    .map(
      (feat) => `
      <li class="feature-item">
        <span class="feature-check">✓</span>
        <span>${feat}</span>
      </li>`
    )
    .join("");

  panelTags.innerHTML = zone.connectedModules
    .map((tag) => `<span class="module-tag">${tag}</span>`)
    .join("");

  detailPanel.classList.add("open");
  syncCategoryPills(zone.category);
}

function resetToOverview() {
  toggle360(false);
  currentZoneIndex = -1;
  targetCameraLook.copy(OVERVIEW_CAMERA.target);
  targetCameraPos.copy(OVERVIEW_CAMERA.position);
  isAnimatingCamera = true;

  detailPanel.classList.remove("open");
  syncCategoryPills("all");
}

function syncCategoryPills(activeCategory) {
  filterPills.forEach((pill) => {
    if (pill.dataset.category === activeCategory) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
}

// ─── 360 ROTATION CONTROLLER ───────────────────────────────────────────────
let is360Active = false;
function toggle360(force) {
  is360Active = typeof force === "boolean" ? force : !is360Active;
  controls.autoRotate = is360Active;
  controls.autoRotateSpeed = 2.4;
  isAnimatingCamera = false;

  const b1 = document.getElementById("btn360");
  const b2 = document.getElementById("btnRotate360");
  if (b1) b1.classList.toggle("active", is360Active);
  if (b2) b2.classList.toggle("active", is360Active);
}

const b360 = document.getElementById("btn360");
if (b360) b360.addEventListener("click", () => toggle360());

const bRot = document.getElementById("btnRotate360");
if (bRot) bRot.addEventListener("click", () => toggle360());

// ─── LISTENERS ──────────────────────────────────────────────────────────────
filterPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    const cat = pill.dataset.category;
    if (cat === "all") {
      resetToOverview();
    } else {
      const zoneIdx = ZONES_DATA.findIndex((z) => z.category === cat);
      if (zoneIdx !== -1) {
        selectZone(zoneIdx);
      }
    }
  });
});

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim().toLowerCase();
  if (!query) return;

  const matchIdx = ZONES_DATA.findIndex(
    (z) =>
      z.title.toLowerCase().includes(query) ||
      z.subtitle.toLowerCase().includes(query) ||
      z.description.toLowerCase().includes(query) ||
      z.connectedModules.some((m) => m.toLowerCase().includes(query)) ||
      z.features.some((f) => f.toLowerCase().includes(query))
  );

  if (matchIdx !== -1) {
    selectZone(matchIdx);
  }
});

document.getElementById("btnBackToMap").addEventListener("click", resetToOverview);
document.getElementById("btnOverview").addEventListener("click", resetToOverview);

document.getElementById("btnPrevZone").addEventListener("click", () => {
  const newIndex = (currentZoneIndex - 1 + ZONES_DATA.length) % ZONES_DATA.length;
  selectZone(newIndex);
});

document.getElementById("btnNextZone").addEventListener("click", () => {
  const newIndex = (currentZoneIndex + 1) % ZONES_DATA.length;
  selectZone(newIndex);
});

document.getElementById("btnZoomIn").addEventListener("click", () => {
  const dir = new THREE.Vector3().subVectors(controls.target, camera.position).normalize();
  camera.position.addScaledVector(dir, 3.5);
});

document.getElementById("btnZoomOut").addEventListener("click", () => {
  const dir = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
  camera.position.addScaledVector(dir, 3.5);
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  updateHotspots();
});

// ─── RENDER LOOP ────────────────────────────────────────────────────────────

// ─── poly.pizza ASSETS: furniture props + animated characters (Quaternius CC0 and friends) ───
const ASSET_FILES = {
  chair: "pp_chair", sofa: "pp_sofa", couch: "pp_couch", washer: "pp_washer", shelf: "pp_shelf", plant: "pp_plant",
  cooler: "pp_cooler", vending: "pp_vending", crate: "pp_crate", desk: "pp_desk", screen: "pp_screen", counter: "pp_counter",
  roundTable: "pp_roundTable", drawer: "pp_drawer", bookcase: "pp_bookcase", tableBig: "pp_tableBig",
  char_worker: "pp_char_worker", char_bizman: "pp_char_bizman", char_casual: "pp_char_casual", char_hoodie: "pp_char_hoodie",
  char_womanB: "pp_char_womanB", char_womanC: "pp_char_womanC",
};
// Real-world heights the props are normalised to (models come in arbitrary units)
const PROP_H = {
  chair: 1.0, sofa: 0.85, couch: 0.85, washer: 1.05, shelf: 2.3, plant: 0.95, cooler: 1.25, vending: 1.9, crate: 0.5,
  desk: 0.76, screen: 0.42, drawer: 0.85, bookcase: 2.0, tableBig: 0.76, counter: 1.05, roundTable: 0.45,
};
const ASSETS = {};
const srgb = (hex) => new THREE.Color(hex).convertSRGBToLinear();

function recolor(obj, map) {
  obj.traverse((o) => {
    if (!o.isMesh) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    const out = mats.map((m) => {
      if (!(m.name in map)) return m;
      const c = m.clone();
      c.color.copy(srgb(map[m.name]));
      return c;
    });
    o.material = Array.isArray(o.material) ? out : out[0];
  });
}

// Place a furniture prop: pivot at its footprint centre, bottom on the floor, scaled to PROP_H (or opts.h)
function prop(name, x, z, rotY = 0, opts = {}) {
  const a = ASSETS[name];
  if (!a) return null;
  const s = (opts.h || PROP_H[name]) / a.size.y;
  const g = new THREE.Group();
  const inner = a.scene.clone();
  inner.scale.setScalar(s);
  inner.position.set(-a.center.x * s, -a.min.y * s, -a.center.z * s);
  inner.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  if (opts.recolor) recolor(inner, opts.recolor);
  g.add(inner);
  g.position.set(x, opts.y ?? FLOOR_Y, z);
  g.rotation.y = rotY;
  worldGroup.add(g);
  return g;
}

function loadAssets() {
  return Promise.all(
    Object.entries(ASSET_FILES).map(
      ([name, file]) =>
        new Promise((res) => {
          gltfLoader.load(
            `models/${file}.glb`,
            (g) => {
              const scene = g.scene;
              scene.updateMatrixWorld(true);
              const box = new THREE.Box3().setFromObject(scene);
              ASSETS[name] = { scene, animations: g.animations || [], size: box.getSize(new THREE.Vector3()), min: box.min.clone(), center: box.getCenter(new THREE.Vector3()) };
              res();
            },
            undefined,
            (e) => {
              console.warn("asset failed", name, e);
              res();
            }
          );
        })
    )
  );
}

// ─── STAFF, VISITORS, PEDESTRIANS, VAN DRIVERS ───
// Every person runs a task queue (walk / face / anim / call / wait). Staff pick stations in their room
// (walking along a small waypoint graph, sitting on real chairs), customers come and go, pedestrians
// wander the sidewalk network and cross only at crossings, van drivers step out and carry the carpets.
const people = [];
const CHAR_H = 1.78;
const BRANDC = { navy: 0x033d53, green: 0x52b369, white: 0xf4f4f2, hiVis: 0xd4ff3a, charcoal: 0x2b3038, black: 0x15181c, teal: 0x0f766e };
const SKINS = [0xf1c7a8, 0xd9a577, 0xb97a56, 0x8d5a3b];
// Uniforms follow the six real CRM roles (staff_users.role): owner, manager, receptionist («оператор»),
// driver, washer, packer. Each staff member also wears a floating role badge (see roleBadge).
const ROLE_LABEL = { owner: "Владелец", manager: "Менеджер", operator: "Оператор", driver: "Водитель", washer: "Мойщик", packer: "Упаковщик" };
const U = {
  // мойщик: navy overall, green vest — works the washing line, centrifuge, dryers, washing machines
  washer: { role: "washer", model: "worker", recolor: { Worker_Yellow: BRANDC.navy, Grey: BRANDC.navy, LightBrown: BRANDC.charcoal, Brown2: BRANDC.charcoal, Brown: BRANDC.charcoal, Worker_Vest: BRANDC.green } },
  // упаковщик: green overall, hi-vis vest — intake (bag split, measuring), packing, hand-out, yard sorting
  packer: { role: "packer", model: "worker", recolor: { Worker_Yellow: BRANDC.green, Grey: BRANDC.green, LightBrown: BRANDC.navy, Brown2: BRANDC.navy, Brown: BRANDC.navy, Worker_Vest: BRANDC.hiVis } },
  // водитель: green polo, navy trousers — routes, pickups, deliveries
  driver: { role: "driver", model: "casual", recolor: { White: BRANDC.green, LightBlue: BRANDC.navy, Red_Dark: BRANDC.black } },
  // оператор: navy blouse / navy suit + green tie — reception desk, new orders, dispatching drivers from the board
  operator: { role: "operator", model: "womanB", recolor: { White: BRANDC.navy, Orange: BRANDC.charcoal } },
  operatorM: { role: "operator", model: "bizman", recolor: { Suit: BRANDC.navy, Tie: BRANDC.green } },
  // менеджер: pricing, routes, cash reconciliation, reports
  manager: { role: "manager", model: "bizman", recolor: {} },
  managerW: { role: "manager", model: "womanC", recolor: { LimeGreen: BRANDC.navy, Gold: BRANDC.green } },
  // владелец: charcoal suit, green tie — owner desk with three monitors
  owner: { role: "owner", model: "bizman", recolor: { Suit: BRANDC.charcoal, Tie: BRANDC.green } },
};
// Role badge: small navy pill floating above the head, one texture per role
const _badgeTex = {};
function roleBadge(role) {
  if (!_badgeTex[role]) {
    _badgeTex[role] = makeCanvasTexture(512, 128, (ctx, cw, ch) => {
      ctx.clearRect(0, 0, cw, ch);
      ctx.fillStyle = "#033D53";
      const r = ch / 2;
      ctx.beginPath();
      ctx.moveTo(r, 0); ctx.lineTo(cw - r, 0); ctx.arc(cw - r, r, r, -Math.PI / 2, Math.PI / 2); ctx.lineTo(r, ch); ctx.arc(r, r, r, Math.PI / 2, -Math.PI / 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "700 64px Inter, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(ROLE_LABEL[role] || role, cw / 2, ch / 2 + 4);
    });
  }
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: _badgeTex[role], transparent: true, depthWrite: false }));
  sp.scale.set(1.1, 0.275, 1);
  sp.position.set(0, CHAR_H + 0.28, 0);
  sp.renderOrder = 5;
  return sp;
}
const CASUAL_LOOKS = [
  ["casual", { White: 0xb91c1c }], ["casual", { White: 0x6b7280 }], ["casual", { White: 0x0f766e, LightBlue: 0x3b4a6b }],
  ["hoodie", { Purple: 0xeab308 }], ["hoodie", { Purple: 0x6b7280 }], ["hoodie", { Purple: 0xb8a98a, LightBlue: 0x2b3038 }],
  ["womanB", { White: 0xdb2777, Orange: 0x2b3038 }], ["womanB", { White: 0x2563eb }], ["womanB", { White: 0xf4f4f2, Orange: 0x3b4a6b }],
  ["womanC", { LimeGreen: 0x2563eb, Red: 0x2b1d14 }], ["womanC", { LimeGreen: 0xb91c1c }], ["womanC", { LimeGreen: 0x8b5cf6 }],
];
let lookSeq = 0;
function casualLook() {
  const [model, recolor] = CASUAL_LOOKS[lookSeq++ % CASUAL_LOOKS.length];
  return { model, recolor, skin: SKINS[lookSeq % SKINS.length] };
}

function clipOf(a, suffix) {
  return a.animations.find((c) => c.name.endsWith("|" + suffix)) || a.animations.find((c) => c.name.includes(suffix));
}

function addPerson(o) {
  const a = ASSETS["char_" + o.model];
  if (!a) return null;
  const root = THREE.SkeletonUtils.clone(a.scene);
  const s = CHAR_H / a.size.y;
  root.scale.setScalar(s);
  root.traverse((m) => {
    if (m.isMesh) {
      m.castShadow = true;
      m.frustumCulled = false;
    }
  });
  const rc = Object.assign({}, o.recolor || {});
  if (o.skin) rc.Skin = o.skin;
  recolor(root, rc);
  const g = new THREE.Group();
  g.add(root);
  g.position.set(o.x || 0, o.y ?? FLOOR_Y, o.z || 0);
  g.rotation.y = o.rotY || 0;
  if (o.role) g.add(roleBadge(o.role));
  worldGroup.add(g);
  const mixer = new THREE.AnimationMixer(root);
  const p = { root: g, inner: root, mixer, speed: o.speed || 1.0, actions: {}, tasks: [], floorY: o.y ?? FLOOR_Y, bones: {} };
  root.traverse((b) => {
    if (b.isBone && /^(UpperLeg|LowerLeg|Foot)\.(L|R)$/.test(b.name)) p.bones[b.name] = b;
  });
  // "Interact" (arms reaching forward) looked odd everywhere, so "work" uses the plain Idle clip
  const names = { idle: "Idle_Neutral", talk: "Idle", work: "Idle", wave: "Wave", walk: "Walk" };
  for (const [k, n] of Object.entries(names)) {
    const c = clipOf(a, n) || clipOf(a, "Idle");
    if (c) p.actions[k] = mixer.clipAction(c);
  }
  playAnim(p, o.anim || "idle", true);
  if (o.hidden) g.visible = false;
  people.push(p);
  return p;
}

function playAnim(p, name, jump = false) {
  const key = name === "sit" ? "idle" : name;
  const next = p.actions[key] || p.actions.idle;
  p.sitting = name === "sit";
  if (!next || p.current === next) return;
  if (p.current) p.current.fadeOut(0.25);
  next.reset().fadeIn(jump ? 0 : 0.25).play();
  if (jump) next.time = Math.random() * next.getClip().duration;
  if (key === "walk") next.timeScale = p.speed / 1.1;
  p.current = next;
}

// Sitting: keep the idle upper body, bend the legs at hip and knee (applied after the mixer each frame)
const _q = new THREE.Quaternion();
const _ax = new THREE.Vector3(1, 0, 0);
function applySit(p) {
  const b = p.bones;
  ["L", "R"].forEach((s) => {
    if (b["UpperLeg." + s]) b["UpperLeg." + s].quaternion.multiply(_q.setFromAxisAngle(_ax, -1.45));
    if (b["LowerLeg." + s]) b["LowerLeg." + s].quaternion.multiply(_q.setFromAxisAngle(_ax, 1.5));
  });
}

// Carried carpet roll rides on the shoulder
const _carryPos = new THREE.Vector3();
function updateCarry(p) {
  if (!p.carry) return;
  const yaw = p.root.rotation.y;
  _carryPos.set(0.3, 1.5, 0.05).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw).add(p.root.position);
  p.carry.position.copy(_carryPos);
  p.carry.rotation.set(0, yaw + Math.PI / 2, 0.1);
  p.carry.visible = true;
}

// ── Task queue ──
const T = {
  walk: (x, z, speed) => ({ type: "walk", x, z, speed }),
  face: (yaw) => ({ type: "face", yaw }),
  anim: (name, dur) => ({ type: "anim", name, dur }),
  call: (fn) => ({ type: "call", fn }),
  wait: (fn) => ({ type: "wait", fn }),
};
function turnToward(p, yaw, dt, rate = 9) {
  let d = yaw - p.root.rotation.y;
  d = Math.atan2(Math.sin(d), Math.cos(d));
  p.root.rotation.y += d * Math.min(1, dt * rate);
  return Math.abs(d) < 0.05;
}
function runTasks(p, dt) {
  while (p.tasks.length) {
    const t = p.tasks[0];
    if (t.type === "walk") {
      const dx = t.x - p.root.position.x, dz = t.z - p.root.position.z;
      const dist = Math.hypot(dx, dz);
      const sp = t.speed || p.speed;
      if (dist < 0.06) { p.tasks.shift(); continue; }
      const step = Math.min(dist, sp * dt);
      const yaw = Math.atan2(dx, dz);
      turnToward(p, yaw, dt);
      p.root.position.x += (dx / dist) * step;
      p.root.position.z += (dz / dist) * step;
      p.root.position.y = p.floorY;
      if (p.speed !== sp) { p.speed = sp; if (p.actions.walk) p.actions.walk.timeScale = sp / 1.1; }
      playAnim(p, "walk");
      return;
    }
    if (t.type === "face") {
      playAnim(p, p.sitting ? "sit" : "idle");
      if (turnToward(p, t.yaw, dt)) p.tasks.shift(); else return;
      continue;
    }
    if (t.type === "anim") {
      playAnim(p, t.name);
      t.dur -= dt;
      if (t.dur <= 0) { p.tasks.shift(); continue; }
      return;
    }
    if (t.type === "call") { p.tasks.shift(); t.fn(p); continue; }
    if (t.type === "wait") {
      playAnim(p, p.sitting ? "sit" : t.anim || "idle");
      if (t.fn(p)) { p.tasks.shift(); continue; }
      return;
    }
    p.tasks.shift();
  }
  if (p.job) p.job(p);
}

const _camPos = new THREE.Vector3();
let peopleFrame = 0;
function updatePeople(dt, t) {
  peopleFrame++;
  _camPos.copy(camera.position);
  for (const p of people) {
    runTasks(p, dt);
    if (!p.root.visible) continue;
    p.root.position.y = p.floorY - (p.sitting ? 0.42 : 0);
    updateCarry(p);
    // Far-away characters animate at a third of the frame rate; hidden ones not at all
    const far = p.root.position.distanceToSquared(_camPos) > 55 * 55;
    p.animDt = (p.animDt || 0) + dt;
    if (far && peopleFrame % 3 !== 0) continue;
    p.mixer.update(p.animDt);
    p.animDt = 0;
    // applySit must follow a mixer update exactly once, otherwise the leg bend compounds
    if (p.sitting) applySit(p);
  }
}

// ── Waypoint graphs for the rooms ──
function makeGraph(nodes, edges) {
  const adj = nodes.map(() => []);
  edges.forEach(([a, b]) => { adj[a].push(b); adj[b].push(a); });
  return { nodes: nodes.map(([x, z]) => ({ x, z })), adj };
}
function nearestNode(g, x, z) {
  let best = 0, bd = Infinity;
  g.nodes.forEach((n, i) => { const d = (n.x - x) ** 2 + (n.z - z) ** 2; if (d < bd) { bd = d; best = i; } });
  return best;
}
function graphRoute(g, from, to) {
  const prev = new Array(g.nodes.length).fill(-1);
  const seen = new Set([from]);
  const q = [from];
  while (q.length) {
    const n = q.shift();
    if (n === to) break;
    for (const m of g.adj[n]) if (!seen.has(m)) { seen.add(m); prev[m] = n; q.push(m); }
  }
  const path = [];
  for (let n = to; n !== -1 && n !== from; n = prev[n]) path.unshift(n);
  return path;
}
// Walk tasks from the person's position to a station through the graph
function walkTo(p, g, st) {
  const from = nearestNode(g, p.root.position.x, p.root.position.z);
  const to = st.node ?? nearestNode(g, st.x, st.z);
  const tasks = [];
  const fromN = g.nodes[from];
  if (Math.hypot(fromN.x - p.root.position.x, fromN.z - p.root.position.z) > 0.3) tasks.push(T.walk(fromN.x, fromN.z));
  graphRoute(g, from, to).forEach((n) => tasks.push(T.walk(g.nodes[n].x, g.nodes[n].z)));
  tasks.push(T.walk(st.x, st.z));
  return tasks;
}
// Job: wander between stations, doing each one's activity for a while; a station is used by one person at a time
function stationJob(g, stations, opts = {}) {
  return (p) => {
    const free = stations.filter((s) => s.busy !== p && !s.busy && s !== p.lastStation);
    const pool = free.length ? free : stations.filter((s) => !s.busy || s.busy === p);
    if (!pool.length) { p.tasks.push(T.anim("idle", 2)); return; }
    const st = pool[Math.floor(Math.random() * pool.length)];
    if (p.lastStation && p.lastStation.busy === p) p.lastStation.busy = null;
    st.busy = p;
    p.lastStation = st;
    p.tasks.push(...walkTo(p, g, st));
    p.tasks.push(T.face(st.yaw));
    const dur = (st.min || 6) + Math.random() * ((st.max || 16) - (st.min || 6));
    p.tasks.push(T.anim(st.anim || "work", dur));
    if (opts.after) p.tasks.push(T.call(opts.after));
  };
}
const ST = (x, z, yaw, anim, min, max, node) => ({ x, z, yaw, anim, min, max, node });
const FACE = { n: 0, s: Math.PI, e: Math.PI / 2, w: -Math.PI / 2 }; // n = +z (towards the street)

// Rooms
// Workshop: washers west of the x=-2.5 partition, packers east of it; the opening is at z -9.6..-6.4
const G_SHOP = makeGraph(
  [[-12.0, -7.7], [-12.0, -9.2], [-11.6, -6.4], [-9.6, -6.4], [-10.5, -7.0], [-6.5, -6.9], [-6.2, -9.0], [-5.0, -7.0], [-2.6, -8.0], [-5.15, -4.0],
   [-10.3, -4.0], [-8.0, -4.0], [-11.0, -9.0], [-5.0, -9.0], [1.4, -9.0], [-1.3, -7.3], [0.2, -7.3], [-0.8, -4.0], [2.6, -8.4], [2.6, -6.2], [0.5, -6.0]],
  [[0, 4], [1, 4], [2, 4], [3, 4], [4, 7], [5, 7], [6, 7], [7, 8], [7, 9], [9, 10], [10, 11], [4, 12], [7, 13], [8, 20], [20, 15], [20, 16], [20, 17], [20, 19], [19, 18], [18, 14]]
);
const WASH_ST = [
  ST(-11.6, -6.4, FACE.n, "work", 8, 20, 2), ST(-9.6, -6.4, FACE.n, "work", 8, 20, 3), ST(-6.5, -6.9, FACE.n, "work", 6, 14, 5),
  ST(-6.2, -9.0, FACE.w, "work", 6, 12, 6), ST(-12.0, -7.7, FACE.w, "work", 6, 14, 0), ST(-12.0, -9.2, FACE.w, "work", 6, 14, 1),
  ST(-10.3, -4.0, FACE.n, "work", 6, 12, 10), ST(-8.0, -4.0, FACE.n, "work", 5, 10, 11),
];
const PACK_ST = [
  ST(-0.8, -4.0, FACE.n, "work", 8, 16, 17), ST(-1.3, -7.3, FACE.s, "work", 8, 18, 15), ST(0.2, -7.3, FACE.s, "work", 6, 12, 16),
  ST(2.6, -8.4, FACE.e, "work", 5, 10, 18), ST(2.6, -6.2, FACE.e, "work", 5, 10, 19),
];
const G_RECEP = makeGraph(
  [[-5.2, 6.6], [-5.2, 4.0], [-6.6, 2.6], [-4.2, 2.6], [-1.6, 2.6], [1.0, 2.2], [-9.6, 0.2], [-8.4, 0.3], [-6.4, 0.2], [-4.4, 0.3], [-2.6, 0.2], [-2.6, 2.6], [-11.2, 0.1], [-9.2, 2.6], [-1.6, -1.2]],
  [[0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [4, 11], [11, 10], [10, 9], [9, 8], [8, 7], [7, 6], [6, 12], [2, 13], [13, 12], [10, 14]]
);
const RECEP_STAFF_ST = [
  ST(-8.4, 0.3, FACE.n, "sit", 12, 30, 7), ST(-4.4, 0.3, FACE.n, "sit", 12, 30, 9), ST(-11.2, 0.1, FACE.n, "sit", 12, 30, 12), ST(-6.4, 0.2, FACE.n, "talk", 4, 8, 8), ST(-1.6, -1.2, FACE.e, "talk", 3, 6, 14), ST(-9.2, 2.6, FACE.s, "talk", 4, 8, 13),
];
const G_MGMT = makeGraph(
  [[-34.0, -8.9], [-32.2, -8.9], [-28.6, -9.0], [-30.0, -4.6], [-25.2, -6.5], [-23.4, -4.6], [-29.0, -7.4], [-26.0, -5.6], [-32.2, -6.0], [-35.5, -4.6]],
  [[0, 1], [1, 2], [1, 8], [8, 3], [2, 3], [3, 4], [3, 5], [3, 7], [8, 6], [3, 9]]
);
const MGMT_ST = [
  ST(-34.0, -8.9, FACE.n, "sit", 15, 40, 0), ST(-28.6, -9.0, FACE.s, "talk", 6, 14, 2), ST(-25.2, -6.5, FACE.w, "talk", 6, 12, 4),
  ST(-23.4, -4.6, FACE.e, "work", 3, 6, 5), ST(-29.0, -7.4, Math.atan2(1.5, 0.9), "sit", 10, 25, 6), ST(-26.0, -5.6, Math.atan2(-1.5, -0.9), "sit", 10, 25, 7), ST(-35.5, -4.6, FACE.w, "work", 3, 6, 9),
];
// Drivers' room: route board, lockers, key board, cash safe, briefing table
const G_DRV = makeGraph(
  [[-20.9, -6.5], [-17.0, -8.6], [-15.0, -8.0], [-15.2, -4.0], [-18.0 + 1.06, -6.0 + 1.06], [-18.0 - 1.06, -6.0 - 1.06], [-18.0, -4.0], [-18.0, -8.0], [-16.4, -6.0]],
  [[0, 6], [0, 7], [6, 4], [7, 5], [7, 1], [1, 2], [2, 8], [8, 3], [6, 8]]
);
const DRV_ST = [
  ST(-20.9, -6.5, FACE.w, "work", 5, 10, 0), ST(-17.0, -8.6, FACE.s, "work", 4, 8, 1), ST(-15.0, -8.0, FACE.e, "work", 3, 6, 2), ST(-15.2, -4.0, FACE.e, "work", 4, 8, 3),
  ST(-18.0 + 1.06, -6.0 + 1.06, Math.atan2(-1.06, -1.06), "sit", 10, 25, 4), ST(-18.0 - 1.06, -6.0 - 1.06, Math.atan2(1.06, 1.06), "sit", 10, 25, 5),
];
const G_DISP = makeGraph([[-18.4, 0.2], [-18.4, 2.4], [-17.2, 1.3], [-20.9, 1.15], [-17.2, 4.0], [-15.0, 1.3]], [[0, 2], [1, 2], [2, 3], [2, 4], [2, 5]]);
const DISP_ST = [ST(-18.4, 0.2, FACE.w, "sit", 15, 40, 0), ST(-18.4, 2.4, FACE.w, "sit", 15, 40, 1), ST(-20.9, 1.15, FACE.w, "work", 6, 12, 3), ST(-17.2, 4.0, FACE.s, "talk", 4, 8, 4)];
// Owner's office
const G_OWN = makeGraph(
  [[-30.0, -1.5], [-30.0, 1.0], [-33.0, -2.0], [-36.4, 1.4], [-25.0, 3.0], [-27.5, 1.6]],
  [[0, 1], [1, 2], [1, 3], [1, 5], [5, 4]]
);
const OWN_ST = [ST(-30.0, -1.5, FACE.n, "sit", 15, 40, 0), ST(-33.0, -2.0, FACE.s, "work", 4, 8, 2), ST(-36.4, 1.4, FACE.w, "work", 3, 6, 3), ST(-25.0, 3.0, FACE.s, "sit", 8, 16, 4)];
// Yard: loaders wait between the dock bays and by the west fence, never
// inside a bay (the vans reverse through those); walking between spots goes along the fence side.
const G_YARD = makeGraph(
  [[-8.0, -11.6], [-2.0, -11.6], [-15.0, -11.6], [-15.4, -16.5], [-15.0, -19.0], [-8.0, -19.0], [-2.0, -19.0],
   [-20.5, -17.0], [-22.4, -17.6], [-24.5, -14.5], [-30.0, -17.6], [-36.0, -17.6]],
  [[0, 5], [1, 6], [5, 6], [5, 4], [4, 3], [3, 2], [4, 7], [7, 8], [8, 9], [9, 10], [10, 11]]
);
const LOADER_ST = [
  ST(-8.0, -11.6, FACE.s, "idle", 4, 9, 0), ST(-2.0, -11.6, FACE.s, "idle", 4, 9, 1),
  ST(-15.4, -16.5, FACE.w, "idle", 5, 10, 3), ST(-15.0, -11.6, FACE.s, "idle", 3, 7, 2), ST(-20.5, -17.0, FACE.w, "talk", 3, 6, 7),
];
// Guard: checks the barrier, chats at the booth, patrols the fence line
const GUARD_ST = [
  ST(-22.4, -17.6, FACE.s, "work", 4, 8, 8), ST(-24.5, -14.5, FACE.n, "talk", 3, 6, 9), ST(-20.5, -17.0, FACE.e, "talk", 3, 6, 7),
  ST(-30.0, -17.6, FACE.s, "idle", 2, 4, 10), ST(-36.0, -17.6, FACE.w, "idle", 2, 4, 11),
];

// ── Customers: come in from the street, do their business, leave, come back later ──
function customerJob(g, entrance, inside, visits) {
  return (p) => {
    const wait = 8 + Math.random() * 25;
    p.tasks.push(T.call((q) => { q.root.visible = false; }), T.anim("idle", wait), T.call((q) => { q.root.visible = true; }));
    p.tasks.push(T.walk(entrance.x, entrance.z), T.walk(inside.x, inside.z));
    const picks = visits.filter(() => Math.random() < 0.7);
    (picks.length ? picks : [visits[0]]).forEach((st) => {
      p.tasks.push(...walkTo(p, g, st), T.face(st.yaw), T.anim(st.anim, (st.min || 4) + Math.random() * 5));
      if (st.onDone) p.tasks.push(T.call(st.onDone));
    });
    p.tasks.push(...walkTo(p, g, inside), T.walk(entrance.x, entrance.z));
  };
}

// ── Sidewalk network for pedestrians (crossings only at junctions, wait for traffic) ──
const PED_O = ROAD_W / 2 + SIDEWALK_W / 2;
function buildSidewalkGraph() {
  const H = [{ z: MAIN_ROAD_Z, x0: WORLD.xMin + 2, x1: WORLD.xMax - 2 }, { z: STREET_Z[0], x0: WEST_X, x1: VERT_X[2] }];
  const Vr = [{ x: WEST_X, z0: STREET_Z[0], z1: MAIN_ROAD_Z }, ...VERT_X.map((x) => ({ x, z0: STREET_Z[0], z1: MAIN_ROAD_Z }))];
  const nodes = [], key = new Map(), edges = [];
  const id = (x, z) => { const k = x.toFixed(1) + "," + z.toFixed(1); if (!key.has(k)) { key.set(k, nodes.length); nodes.push({ x, z }); } return key.get(k); };
  const link = (a, b, cross) => edges.push([a, b, cross]);
  H.forEach((h) => [-1, 1].forEach((s) => {
    const z = h.z + s * PED_O;
    const xs = [];
    Vr.forEach((v) => { if (v.x > h.x0 - 1 && v.x < h.x1 + 1 && z > v.z0 - 1 && z < v.z1 + 1) xs.push({ x: v.x - PED_O, road: v }, { x: v.x + PED_O, road: v }); });
    if (!xs.some((e) => Math.abs(e.x - (h.x0 - PED_O)) < 1)) xs.push({ x: h.x0 - (h.x0 === WEST_X || VERT_X.includes(h.x0) ? -PED_O : 0) });
    if (!xs.some((e) => Math.abs(e.x - (h.x1 + PED_O)) < 1)) xs.push({ x: h.x1 + (VERT_X.includes(h.x1) ? PED_O : 0) });
    xs.sort((a, b) => a.x - b.x);
    for (let i = 1; i < xs.length; i++) {
      const cross = xs[i - 1].road && xs[i - 1].road === xs[i].road && z > xs[i].road.z0 && z < xs[i].road.z1;
      link(id(xs[i - 1].x, z), id(xs[i].x, z), !!cross);
    }
  }));
  Vr.forEach((v) => [-1, 1].forEach((s) => {
    const x = v.x + s * PED_O;
    const zs = [];
    H.forEach((h) => { if (h.z > v.z0 - 1 && h.z < v.z1 + 1 && x > h.x0 - PED_O - 1 && x < h.x1 + PED_O + 1) zs.push({ z: h.z - PED_O, road: h }, { z: h.z + PED_O, road: h }); });
    zs.sort((a, b) => a.z - b.z);
    for (let i = 1; i < zs.length; i++) {
      const cross = zs[i - 1].road && zs[i - 1].road === zs[i].road && x > zs[i].road.x0 && x < zs[i].road.x1;
      link(id(x, zs[i - 1].z), id(x, zs[i].z), !!cross);
    }
  }));
  const adj = nodes.map(() => []);
  edges.forEach(([a, b, cross]) => { if (a !== b) { adj[a].push({ n: b, cross }); adj[b].push({ n: a, cross }); } });
  return { nodes, adj };
}
let PED_GRAPH = null;
const _pv = new THREE.Vector3();
function trafficNear(x, z, r) {
  return vehicles.some((o) => o.speed > 0.4 && Math.hypot(o.root.position.x - x, o.root.position.z - z) < r);
}
function pedestrianJob(p) {
  const g = PED_GRAPH;
  const here = p.node ?? nearestNode(g, p.root.position.x, p.root.position.z);
  const opts = g.adj[here].filter((e) => e.n !== p.prevNode);
  const pick = (opts.length ? opts : g.adj[here])[Math.floor(Math.random() * (opts.length ? opts.length : g.adj[here].length))];
  if (!pick) { p.tasks.push(T.anim("idle", 3)); return; }
  const to = g.nodes[pick.n];
  const from = g.nodes[here];
  if (pick.cross) {
    const mx = (from.x + to.x) / 2, mz = (from.z + to.z) / 2;
    // Walk along the kerb to the zebra, cross on it, then walk back to the sidewalk line
    const alongX = Math.abs(to.x - from.x) > Math.abs(to.z - from.z); // crossing a "z" road
    let zebra = null, bestD = 14;
    for (const c of CROSSINGS) {
      if (c.axis !== (alongX ? "z" : "x")) continue;
      const d = alongX ? Math.abs(c.z - mz) : Math.abs(c.x - mx);
      const onRoad = alongX ? Math.abs(c.x - mx) < 1 : Math.abs(c.z - mz) < 1;
      if (onRoad && d < bestD) { bestD = d; zebra = c; }
    }
    const a = zebra ? (alongX ? { x: from.x, z: zebra.z } : { x: zebra.x, z: from.z }) : from;
    const b = zebra ? (alongX ? { x: to.x, z: zebra.z } : { x: zebra.x, z: to.z }) : to;
    if (zebra) p.tasks.push(T.walk(a.x, a.z));
    p.tasks.push(T.face(Math.atan2(b.x - a.x, b.z - a.z)));
    p.tasks.push(T.wait(() => !trafficNear((a.x + b.x) / 2, (a.z + b.z) / 2, 15)));
    p.tasks.push(T.call((q) => { q.crossing = true; }));
    p.tasks.push(T.walk(b.x, b.z));
    p.tasks.push(T.call((q) => { q.crossing = false; }));
  }
  p.tasks.push(T.walk(to.x, to.z));
  p.tasks.push(T.call((q) => { q.crossing = false; q.prevNode = here; q.node = pick.n; }));
  if (Math.random() < 0.15) p.tasks.push(T.anim("idle", 2 + Math.random() * 4));
}
// Used by the traffic: pedestrians currently on a crossing
function pedestrianOnCrossing(v) {
  _fwd.set(0, 0, 1).applyQuaternion(v.root.quaternion);
  return people.some((p) => {
    if (!p.crossing) return false;
    _d.subVectors(p.root.position, v.root.position);
    const along = _d.dot(_fwd);
    const lateral = Math.abs(_fwd.x * _d.z - _fwd.z * _d.x);
    return along > -1 && along < 13 && lateral < 6;
  });
}

// ── Van drivers: step out at every stop, open the doors and carry the carpet by hand ──
function truckDriverFor(v) {
  if (v.driverP) return v.driverP;
  v.driverP = addPerson({ ...U.driver, hidden: true, skin: SKINS[vehicles.indexOf(v) % SKINS.length] });
  return v.driverP;
}
function local(v, x, z) {
  return v.root.localToWorld(new THREE.Vector3(x, 0, z));
}
function startLoading(v, stop) {
  const p = truckDriverFor(v);
  if (!p) return false;
  const W = VAN.halfW;
  const cab = local(v, -W - 0.6, 1.3); // driver door (local +x is the van's left; the driver sits there)
  const rearSide = local(v, -W - 0.6, VAN.rearZ - 0.6);
  const rear = local(v, 0, VAN.rearZ - 0.7);
  const door = stop.target.doorPoint.clone();
  const doorStand = door.clone().lerp(rear, 0.18);
  const yawTo = (from, to) => Math.atan2(to.x - from.x, to.z - from.z);
  const yawVan = v.root.rotation.y; // facing the van's rear from behind = looking along +z of the van
  const dirty = v.carpetDirty, clean = v.carpetClean;
  p.floorY = 0.09;
  p.root.position.set(cab.x, 0.09, cab.z);
  p.root.rotation.y = yawTo(cab, rearSide);
  p.tasks.length = 0;
  p.tasks.push(T.call((q) => { q.root.visible = true; }));
  p.tasks.push(T.walk(rearSide.x, rearSide.z, 1.2), T.walk(rear.x, rear.z, 1.2), T.face(yawVan));
  p.tasks.push(T.call(() => { v.doorTarget = 1; }), T.anim("work", 1.2));
  const takeFromVan = (c) => [T.face(yawVan), T.anim("work", 1.0), T.call((q) => { q.carry = c; })];
  const putInVan = () => [T.face(yawVan), T.anim("work", 1.0), T.call((q) => { if (q.carry) q.carry.visible = false; q.carry = null; })];
  const goDoor = () => [T.walk(doorStand.x, doorStand.z, 1.1), T.face(yawTo(doorStand, door))];
  const goRear = () => [T.walk(rear.x, rear.z, 1.1)];
  const placeAtDoor = (c) => [T.anim("work", 1.0), T.call((q) => { q.carry = null; c.position.set(door.x, stop.kind === "dock" ? 0.36 : door.y - 0.2, door.z); c.rotation.set(0, yawTo(rear, door) + Math.PI / 2, 0); c.visible = true; })];
  const pickAtDoor = (c) => [T.anim("work", 1.0), T.call((q) => { q.carry = c; })];
  if (stop.kind === "pickup") {
    p.tasks.push(...goDoor(), ...pickAtDoor(dirty), ...goRear(), ...putInVan());
  } else if (stop.kind === "deliver") {
    p.tasks.push(...takeFromVan(clean), ...goDoor(), ...placeAtDoor(clean), T.anim("talk", 1.5), T.call(() => { clean.visible = false; }), ...goRear());
  } else {
    p.tasks.push(...takeFromVan(dirty), ...goDoor(), ...placeAtDoor(dirty), T.call(() => handOverAtDock(stop, dirty)), T.anim("idle", 1.0));
    p.tasks.push(T.call(() => { clean.position.set(door.x + 0.6, 0.36, door.z); clean.rotation.set(0, yawTo(rear, door) + Math.PI / 2, 0); clean.visible = true; }));
    p.tasks.push(...pickAtDoor(clean), ...goRear(), ...putInVan());
  }
  p.tasks.push(T.face(yawVan), T.call(() => { v.doorTarget = 0; }), T.anim("work", 1.2));
  p.tasks.push(T.walk(rearSide.x, rearSide.z, 1.2), T.walk(cab.x, cab.z, 1.2), T.anim("idle", 0.4));
  p.tasks.push(T.call((q) => { q.root.visible = false; v.loadDone = true; }));
  return true;
}
// A dock loader collects the dirty carpet from the dock and carries it to the washing line
function handOverAtDock(stop, carpet) {
  const loader = people.filter((q) => q.isLoader).sort((a, b) => a.root.position.distanceTo(stop.target.doorPoint) - b.root.position.distanceTo(stop.target.doorPoint))[0];
  if (!loader) { carpet.visible = false; return; }
  const d = stop.target.doorPoint;
  if (loader.lastStation && loader.lastStation.busy === loader) loader.lastStation.busy = null;
  loader.tasks.length = 0;
  // Whatever the loader was carrying is dropped, otherwise it would freeze in mid-air
  if (loader.carry) { loader.carry.visible = false; if (loader.carry.isBag) worldGroup.remove(loader.carry); loader.carry = null; }
  // The loader carries a copy: the van's own roll mesh is reused at the next pickup
  const bag = carpet.clone();
  bag.isBag = true;
  bag.visible = false;
  worldGroup.add(bag);
  loader.tasks.push(T.walk(d.x, d.z - 1.6), T.face(0), T.anim("work", 1.0), T.call((q) => { carpet.visible = false; q.carry = bag; }));
  // Carry the bag to the washing line: dock 1 straight in, dock 2 via the corridor, dock 3 through the partition opening
  const way = d.x < -8 ? [[d.x, -9.0], [-10.5, -7.0]] : d.x < -2.5 ? [[d.x, -9.0], [-5.0, -7.0], [-10.5, -7.0]] : [[d.x, -9.3], [-1.3, -9.3], [-2.6, -8.0], [-5.0, -7.0], [-10.5, -7.0]];
  loader.tasks.push(...way.map(([x, z]) => T.walk(x, z)), T.face(FACE.n), T.anim("work", 1.2), T.call((q) => { if (q.carry) { q.carry.visible = false; worldGroup.remove(q.carry); } q.carry = null; }));
  const gapX = d.x < -5 ? -8.0 : -2.0; // pallet spot next to this bay
  loader.tasks.push(...way.slice(0, -1).reverse().map(([x, z]) => T.walk(x, z)), T.walk(d.x, -10.7), T.walk(gapX, -10.7), T.walk(gapX, -11.6), T.face(FACE.s));
}

function spawnPeople() {
  PED_GRAPH = buildSidewalkGraph();
  const S = SKINS;
  // 1. Reception staff
  // Operators (receptionist role): create orders and customers at the desk, hand orders out
  addPerson({ ...U.operator, x: -8.4, z: 0.3, rotY: 0, anim: "sit" }).job = stationJob(G_RECEP, RECEP_STAFF_ST);
  addPerson({ ...U.operatorM, x: -4.4, z: 0.3, rotY: 0, anim: "sit", skin: S[1] }).job = stationJob(G_RECEP, RECEP_STAFF_ST);
  addPerson({ ...U.operator, recolor: { White: BRANDC.navy, Orange: BRANDC.charcoal, Hair_Blond: 0x2b1d14 }, x: -11.2, z: 0.1, rotY: 0, anim: "sit", skin: S[3] }).job = stationJob(G_RECEP, RECEP_STAFF_ST);
  // Reception customers: come in to place an order, ask about one or pay, sit a while, leave — carpets go through the drivers and the docks
  const counterVisits = [ST(-6.6, 2.6, FACE.s, "talk", 5, 9, 2), ST(-4.2, 2.6, FACE.s, "talk", 4, 8, 3), ST(1.0, 2.2, FACE.s, "idle", 5, 10, 5)];
  for (let i = 0; i < 3; i++) {
    const c = addPerson({ ...casualLook(), x: -5.2, z: 6.6, hidden: true, y: 0.09 });
    c.floorY = FLOOR_Y;
    c.job = customerJob(G_RECEP, { x: -5.2, z: 6.6 }, { x: -5.2, z: 4.0 }, counterVisits);
    c.tasks.push(T.anim("idle", i * 12));
  }
  // 2. Workshop crew: washers on the wet side, packers on the dry side
  WASH_ST.slice(0, 5).forEach((st, i) => {
    const w = addPerson({ ...U.washer, x: st.x, z: st.z, rotY: st.yaw, anim: "work", skin: S[i % 4] });
    w.job = stationJob(G_SHOP, WASH_ST);
    st.busy = w; w.lastStation = st;
    w.tasks.push(T.anim("work", 4 + i * 2));
  });
  PACK_ST.slice(0, 3).forEach((st, i) => {
    const w = addPerson({ ...U.packer, x: st.x, z: st.z, rotY: st.yaw, anim: "work", skin: S[(i + 2) % 4] });
    w.job = stationJob(G_SHOP, PACK_ST);
    st.busy = w; w.lastStation = st;
    w.tasks.push(T.anim("work", 3 + i * 2));
  });
  // 3. Drivers' room: two drivers between shifts — route board, lockers, cash drop, briefing table
  addPerson({ ...U.driver, x: -20.9, z: -6.5, rotY: FACE.w, anim: "work", skin: S[2] }).job = stationJob(G_DRV, DRV_ST);
  addPerson({ ...U.driver, recolor: { White: BRANDC.green, LightBlue: BRANDC.charcoal, Red_Dark: BRANDC.black }, x: -16.94, z: -4.94, rotY: Math.atan2(-1.06, -1.06), anim: "sit", skin: S[0] }).job = stationJob(G_DRV, DRV_ST);
  // 4. Managers: one at the desk (pricing queue), two at the meeting table (routes, cash)
  addPerson({ ...U.manager, x: -34.0, z: -8.9, rotY: FACE.n, anim: "sit", skin: S[1] }).job = stationJob(G_MGMT, MGMT_ST);
  addPerson({ ...U.managerW, x: -25.2, z: -6.5, rotY: FACE.w, anim: "talk" }).job = stationJob(G_MGMT, MGMT_ST);
  addPerson({ ...U.manager, recolor: { Suit: BRANDC.navy }, x: -28.6, z: -9.0, rotY: FACE.s, anim: "talk", skin: S[2] }).job = stationJob(G_MGMT, MGMT_ST);
  // 5. Owner's office
  addPerson({ ...U.owner, x: -30.0, z: -1.5, rotY: FACE.n, anim: "sit", skin: S[1] }).job = stationJob(G_OWN, OWN_ST);
  // 6. Dispatch: operators send pickup drivers out from the board (requireDispatchRole includes receptionist)
  addPerson({ ...U.operator, recolor: { White: BRANDC.navy, Orange: BRANDC.charcoal, Hair_Blond: 0x2b1d14 }, x: -18.4, z: 0.2, rotY: FACE.w, anim: "sit" }).job = stationJob(G_DISP, DISP_ST);
  addPerson({ ...U.operatorM, x: -18.4, z: 2.4, rotY: FACE.w, anim: "sit", skin: S[1] }).job = stationJob(G_DISP, DISP_ST);
  // Service yard: packers receive bags from the drivers and hand clean orders back (no guard — not a CRM role)
  for (let i = 0; i < 2; i++) {
    const st = LOADER_ST[i];
    const l = addPerson({ ...U.packer, x: st.x, z: st.z, rotY: st.yaw, anim: "work", y: 0.09, skin: S[(i + 1) % 4] });
    l.isLoader = true;
    l.job = stationJob(G_YARD, LOADER_ST);
  }
  // Pedestrians on the sidewalk network
  for (let i = 0; i < 18; i++) {
    const n = PED_GRAPH.nodes[Math.floor(Math.random() * PED_GRAPH.nodes.length)];
    const p = addPerson({ ...casualLook(), x: n.x, z: n.z, y: 0.09, speed: 0.9 + Math.random() * 0.5 });
    p.node = nearestNode(PED_GRAPH, n.x, n.z);
    p.job = pedestrianJob;
  }
}

loadAssets().then(() => {
  buildInterior();
  spawnPeople();
  hideLoadingScreen();
});

const clock = new THREE.Clock();
let frameNo = 0;
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);

  // 1. Traffic: company trucks (with pickups), civilian cars
  updateVehicles(dt, clock.elapsedTime);
  updatePeople(dt, clock.elapsedTime);

  // 2. Smooth Camera Lerp
  if (isAnimatingCamera) {
    camera.position.lerp(targetCameraPos, 0.07);
    controls.target.lerp(targetCameraLook, 0.07);

    if (
      camera.position.distanceTo(targetCameraPos) < 0.04 &&
      controls.target.distanceTo(targetCameraLook) < 0.04
    ) {
      camera.position.copy(targetCameraPos);
      controls.target.copy(targetCameraLook);
      isAnimatingCamera = false;
    }
  }

  controls.update();
  if (frameNo++ % 2 === 0) renderer.shadowMap.needsUpdate = true;
  renderer.render(scene, camera);
  updateHotspots();
}

animate();
