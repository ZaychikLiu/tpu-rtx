/* ==========================================================================
   TPU-RTX Bilingual Content Dictionary (English / 中文)
   Author: Feiyang Liu
   ========================================================================== */

window.TPU_RTX_DATA = {
  plates: [
    // --- Moana & Film / Optics Singles (10 Film) ---
    {
      id: "moana_daylight_4k",
      cat: "film",
      web: "./assets/singles/moana_daylight_4k.webp",
      png: "./assets/singles/moana_daylight_4k.webp",
      badges: {
        en: [["hot", "Moana Daylight 4K"], ["", "22.30B Instanced Tris"], ["ok", "4.65 GiB HBM · 5.13 s"]],
        zh: [["hot", "Moana 晴天泻湖 4K"], ["", "223 亿实例化三角面"], ["ok", "4.65 GiB HBM · 5.13 s"]]
      },
      title: {
        en: "Disney Moana OpenUSD v2.1: Motunui Lagoon Daylight (4K)",
        zh: "迪士尼 Moana OpenUSD v2.1：Motunui 晴天泻湖 (4K)"
      },
      desc: {
        en: "Full daylight wide view of Disney's 22.30B-tri OpenUSD island showing transparent lagoon water, submerged coral heads, palm canopy, and volcanic ridges compiled into 4.65 GiB TPU HBM (5.13 s @ 4K).",
        zh: "223 亿面 OpenUSD 岛屿白日广角视角，包含清澈泻湖水体、水下礁石、棕榈林与火山山脊，全部编入 4.65 GiB TPU HBM（4K 单帧 5.13 s）。"
      }
    },
    {
      id: "moana_sunset",
      cat: "film",
      web: "./assets/singles/moana_sunset.webp",
      png: "./assets/singles/moana_sunset.webp",
      badges: {
        en: [["hot", "22.30B Instanced Tris"], ["", "Native 4K"], ["ok", "4.65 GiB HBM · 5.60 s"]],
        zh: [["hot", "223 亿实例化三角面"], ["", "3840×2160"], ["ok", "4.65 GiB HBM · 5.60 s"]]
      },
      title: {
        en: "Disney Moana OpenUSD v2.1: Motunui Sunset Lagoon (4K)",
        zh: "迪士尼 Moana OpenUSD v2.1：Motunui 日落海湾 (4K)"
      },
      desc: {
        en: "45.5M unique + 14.0M instanced BLAS triangles packed into 4.653 GiB HBM on Google Cloud TPU v5p: Rayleigh sunset glare and specular wave glints traced in 5.60 s at 3840×2160.",
        zh: "4,550 万唯一三角面与 1,400 万实例化 BLAS 共计 223 亿等效面，占用 4.653 GiB HBM；Rayleigh 日落散射与海面高光在 3840×2160 下耗时 5.60 s。"
      }
    },
    {
      id: "moana_mjx_beach",
      cat: "film",
      web: "./assets/singles/moana_mjx_beach.webp",
      png: "./assets/singles/moana_mjx_beach.webp",
      badges: {
        en: [["hot", "Physical AI × Film"], ["", "22.30B + 45 MJX Geoms"], ["ok", "5.40 s @ 4K"]],
        zh: [["hot", "物理仿真 × 电影场景"], ["", "223 亿面 + 45 刚体"], ["ok", "4K 5.40 s"]]
      },
      title: {
        en: "MJX Humanoid & Quadruped Running on Disney Moana Beach (4K)",
        zh: "MJX 人形与四足机器人奔跑于 Moana 沙滩 (4K)"
      },
      desc: {
        en: "A single unified TLAS traces both Disney's 22.30B-tri Moana OpenUSD island and 45 live MuJoCo MJX robot geoms with mutual BVH sand shadows inside one XLA graph (host_callbacks = 0).",
        zh: "单个统一 TLAS 在同一张 XLA 计算图内同时追踪 223 亿面 Moana OpenUSD 与 45 个 MuJoCo MJX 关节刚体，并生成彼此交叠的沙滩阴影（host_callbacks = 0）。"
      }
    },
    {
      id: "moana_8k_bay",
      cat: "film",
      web: "./assets/singles/moana_8k_bay.webp",
      png: "./assets/singles/moana_8k_bay.webp",
      badges: {
        en: [["hot", "8K UHD"], ["", "7680×4320 · 33.18M px"], ["ok", "17.24 s / 4 Chips"]],
        zh: [["hot", "8K UHD"], ["", "7680×4320 · 3,318 万像素"], ["ok", "4 芯 17.24 s"]]
      },
      title: {
        en: "Disney Moana OpenUSD: 8K Tropical Palm Canopy & Ridge",
        zh: "迪士尼 Moana OpenUSD：8K 棕榈冠层与山脊特写"
      },
      desc: {
        en: "Full 33.18M-pixel 8K raytrace through dense instanced tropical palms and mountain foliage directly via OpenUSD PointInstancers across 4 TPU v5p chips in 17.24 s (3.85 MRays/s, gather_ops = 0).",
        zh: "4 颗 TPU v5p 芯片协同渲染 7680×4320 像素 8K 棕榈冠层与山脊植被，直接遍历 OpenUSD PointInstancer（17.24 s，gather_ops = 0）。"
      }
    },
    // --- Standalone Blender Studio TPU-RTX Plates ---
    {
      id: "bmw27_tpu",
      cat: "film",
      web: "./assets/singles/bmw27_tpu.webp",
      png: "./assets/singles/bmw27_tpu.webp",
      badges: {
        en: [["hot", "Blender BMW27"], ["", "37.65 dB Orbit"], ["ok", "0.9813 SSIM"]],
        zh: [["hot", "Blender BMW27"], ["", "37.65 dB 环绕"], ["ok", "SSIM 0.9813"]]
      },
      title: {
        en: "Blender Open Data BMW27 Clearcoat Car (TPU-RTX AgX)",
        zh: "Blender BMW27 双层清漆跑车（TPU-RTX + AgX）"
      },
      desc: {
        en: "Compiled directly from the official .blend Cycles shader graph to Wide-BVH-64: 37.65 dB orbit PSNR, 0.9813 SSIM, and −0.012% luminance bias vs. Cycles EXR.",
        zh: "由官方 .blend Cycles 节点图编译为 Wide-BVH-64：环绕视角 37.65 dB、SSIM 0.9813，亮度偏差 −0.012%。"
      }
    },
    {
      id: "barcelona_tpu",
      cat: "film",
      web: "./assets/singles/barcelona_tpu.webp",
      png: "./assets/singles/barcelona_tpu.webp",
      badges: {
        en: [["hot", "Barcelona 54.91M Tris"], ["", "15.94 mm Z-MAE"], ["ok", "1.11 img/s @ 4K"]],
        zh: [["hot", "巴塞罗那馆 5,491 万面"], ["", "15.94 mm 深度误差"], ["ok", "4K 1.11 img/s"]]
      },
      title: {
        en: "Blender Barcelona Pavilion (54.91M Unique Triangles)",
        zh: "Blender 巴塞罗那展馆（5,491 万唯一三角面）"
      },
      desc: {
        en: "54.91M architectural and foliage triangles traversed with 15.94 mm Z-depth MAE and 1.11 img/s 4K throughput on 4 TPU v5p chips.",
        zh: "5,491 万建筑与植被三角面在 4 芯 TPU v5p 上实现 15.94 mm 深度误差，4K 吞吐 1.11 img/s。"
      }
    },
    {
      id: "monster_sss_tpu",
      cat: "film",
      web: "./assets/singles/monster_sss_tpu.webp",
      png: "./assets/singles/monster_sss_tpu.webp",
      badges: {
        en: [["hot", "Monster SSS 1024²"], ["", "36.98 dB Orbit"], ["ok", "0.121 mm Z-MAE"]],
        zh: [["hot", "床下怪兽 SSS"], ["", "36.98 dB 环绕"], ["ok", "0.121 mm 深度误差"]]
      },
      title: {
        en: "Blender Studio Monster Under the Bed SSS (1.60M Tris, 10.07 img/s)",
        zh: "Blender Studio 床下怪兽 SSS（160 万面，1024² 10.07 img/s）"
      },
      desc: {
        en: "Subsurface-scattered character asset hitting 36.98 dB orbit (35.34 dB hero) and 0.121 mm geometric Z-MAE at 10.07 img/s (1024²).",
        zh: "次表面散射角色资产：环绕 36.98 dB（主视角 35.34 dB），几何深度误差 0.121 mm，4 芯 1024² 速率 10.07 img/s。"
      }
    },
    {
      id: "fishycat_tpu",
      cat: "film",
      web: "./assets/singles/fishycat_tpu.webp",
      png: "./assets/singles/fishycat_tpu.webp",
      badges: {
        en: [["hot", "Fishy Cat Fur"], ["", "7,255 Fur Instances"], ["ok", "28.80 dB / 0.9592 SSIM"]],
        zh: [["hot", "Fishy Cat 毛发池塘"], ["", "7,255 毛发实例"], ["ok", "28.80 dB / 0.9592 SSIM"]]
      },
      title: {
        en: "Blender Studio Fishy Cat (907k Tris, 7,255 Instanced Fur Strands)",
        zh: "Blender Studio Fishy Cat（90.7 万面，7,255 个毛发实例）"
      },
      desc: {
        en: "Multi-material fur, translucent water, and grass courtyard reaching 28.80 dB PSNR and 0.9592 SSIM against Blender Cycles.",
        zh: "多材质毛发、折射水面与庭院植被，对比 Blender Cycles 达 28.80 dB PSNR 与 0.9592 SSIM。"
      }
    },
    {
      id: "barbershop_tpu",
      cat: "film",
      web: "./assets/singles/barbershop_tpu.webp",
      png: "./assets/singles/barbershop_tpu.webp",
      badges: {
        en: [["hot", "8.55M Tris · 141 Tex"], ["", "31.00 dB Orbit"], ["ok", "13.8 mm MedAE"]],
        zh: [["hot", "理发店 855 万面"], ["", "141 张纹理 · 31.00 dB"], ["ok", "13.8 mm 中位误差"]]
      },
      title: {
        en: "Blender Barbershop Interior (8.55M Tris, 249 Materials, 141 Textures)",
        zh: "Blender 理发店室内（855 万面、249 材质、141 张贴图）"
      },
      desc: {
        en: "Heavy architectural interior with transparent-glass blocker handling and 141 packed UV maps achieving 31.00 dB orbit (SSIM 0.9285, 4K 1.16 img/s).",
        zh: "包含玻璃窗透射与 141 张打包 UV 贴图的室内场景：环绕 31.00 dB（SSIM 0.9285，4K 1.16 img/s）。"
      }
    },
    {
      id: "lonemonk_tpu",
      cat: "film",
      web: "./assets/singles/lonemonk_tpu.webp",
      png: "./assets/singles/lonemonk_tpu.webp",
      badges: {
        en: [["hot", "Lone Monk 20.14M"], ["", "28.83 dB Orbit"], ["ok", "3.58 img/s @ 1080p"]],
        zh: [["hot", "独行僧侣 2,014 万面"], ["", "28.83 dB 环绕"], ["ok", "1080p 3.58 img/s"]]
      },
      title: {
        en: "Blender Open Data Lone Monk Courtyard, Lanterns & Foliage",
        zh: "Blender 独行僧侣庭院（植被与灯笼暖光）"
      },
      desc: {
        en: "20.14M instanced canopy triangles with warm lantern bounce lighting compiled to Wide-BVH-64 at 28.83 dB orbit and 18.91 mm Z-MAE.",
        zh: "2,014 万实例化植被面与灯笼多材质漫反射照明：环绕 28.83 dB，深度误差 18.91 mm。"
      }
    },
    // --- Physical Optics Singles (3 Optics) ---
    {
      id: "prism_dispersion",
      cat: "optics",
      web: "./assets/singles/prism_dispersion.webp",
      png: "./assets/singles/prism_dispersion.webp",
      badges: {
        en: [["hot", "6-Band Cauchy Prism"], ["", "Wavelength IOR"], ["ok", "128 spp Path Tracing"]],
        zh: [["hot", "6 波段柯西棱镜色散"], ["", "分波长折射率"], ["ok", "128 spp 路径追踪"]]
      },
      title: {
        en: "Spectral Cauchy Prism Dispersion (6 Wavelength Bins)",
        zh: "6 波段柯西光谱三棱镜色散"
      },
      desc: {
        en: "Wavelength-varying index of refraction splits collimated white light into separate RGB spectral caustic ribbons on the floor.",
        zh: "基于波长查表的折射率将白光束色散分解为连续的红至蓝光谱焦散带。"
      }
    },
    {
      id: "jade_sss",
      cat: "optics",
      web: "./assets/singles/jade_sss.webp",
      png: "./assets/singles/jade_sss.webp",
      badges: {
        en: [["hot", "16-Step Random-Walk"], ["", "Volumetric Jade SSS"], ["ok", "128 spp · 0 Gather"]],
        zh: [["hot", "16 步随机游走 SSS"], ["", "玉石次表面散射"], ["ok", "128 spp · 零 Gather"]]
      },
      title: {
        en: "16-Step Random-Walk Subsurface Scattering in Translucent Jade",
        zh: "16 步体内随机游走玉石次表面散射"
      },
      desc: {
        en: "Volumetric mean-free-path stepping inside carved meshes produces warm inner green glow under grazing backlight.",
        zh: "在网格内部按平均自由程进行随机游走步进，在薄壁与背光处呈现半透明内散射效果。"
      }
    },
    {
      id: "cathedral_godrays",
      cat: "optics",
      web: "./assets/singles/cathedral_godrays.webp",
      png: "./assets/singles/cathedral_godrays.webp",
      badges: {
        en: [["hot", "Volumetric God Rays"], ["", "BVH-Shadowed Fog"], ["ok", "192 spp XLA Loop"]],
        zh: [["hot", "教堂体积散射光束"], ["", "BVH 阴影体积雾"], ["ok", "192 spp 单图循环"]]
      },
      title: {
        en: "BVH-Shadowed Volumetric Cathedral Crepuscular Rays",
        zh: "BVH 遮挡阴影下的教堂体积光束"
      },
      desc: {
        en: "Equi-angular volumetric ray marching coupled with stained-glass BVH shadow queries inside TPU HBM.",
        zh: "等角度体积采样与宽 BVH 阴影查询耦合，全部步进在单张 XLA 计算图内完成。"
      }
    },
    // --- Real-World 3DGS Singles (6 Real-World 3DGS) ---
    {
      id: "robowild_panda_4k",
      cat: "gs3d",
      web: "./assets/singles/robowild_panda_4k.webp",
      png: "./assets/singles/robowild_panda_4k.webp",
      badges: {
        en: [["hot", "RoboWild 4K Composite"], ["", "1.80M Kitchen + Panda"], ["ok", "Z-Buffer Composite"]],
        zh: [["hot", "RoboWild 4K 混合场景"], ["", "180 万厨房高斯 + Panda"], ["ok", "深度混合与阴影"]]
      },
      title: {
        en: "RoboWild 4K: MJX Franka Panda in Mip-NeRF 360 Kitchen + LEGO Dozer",
        zh: "RoboWild 4K：MJX Franka Panda 置于 Mip-NeRF 360 厨房"
      },
      desc: {
        en: "4K composite of a MuJoCo MJX Franka Panda casting analytical shadows onto tabletop placemats alongside the 1.80M-splat LEGO Dozer capture.",
        zh: "实时 MJX Franka 机械臂与 180 万高斯 Mip-NeRF 360 厨房及乐高推土机的 4K 混合渲染，机械臂在桌布上投出解析阴影。"
      }
    },
    {
      id: "garden_4k",
      cat: "gs3d",
      web: "./assets/singles/garden_4k.webp",
      png: "./assets/singles/garden_4k.webp",
      badges: {
        en: [["hot", "5.83M Real SH3"], ["", "4K 2.61 FPS · 8K 0.88"], ["ok", "gather_ops = 0"]],
        zh: [["hot", "583 万 SH3 高斯"], ["", "4K 2.61 / 8K 0.88 FPS"], ["ok", "gather_ops = 0"]]
      },
      title: {
        en: "Mip-NeRF 360 garden (5,834,784 SH3 Gaussians @ 4K / 8K)",
        zh: "Mip-NeRF 360 garden（583 万 SH3 高斯，4K / 8K）"
      },
      desc: {
        en: ".ply photogrammetry scan rasterized without HBM gather: 2.61 FPS at 4K (3840×2160) and 29.19 MPix/s at 8K (7680×4320) across 4 TPU v5p chips.",
        zh: "实景 .ply 摄影测量重建，无动态 HBM Gather：4 芯 4K 达 2.61 FPS，8K 达 29.19 MPix/s。"
      }
    },
    {
      id: "bicycle_4k",
      cat: "gs3d",
      web: "./assets/singles/bicycle_4k.webp",
      png: "./assets/singles/bicycle_4k.webp",
      badges: {
        en: [["hot", "6.13M Real SH3"], ["", "4K 2.59 FPS"], ["ok", "0 Gather Ops"]],
        zh: [["hot", "613 万 SH3 高斯"], ["", "4K 2.59 FPS"], ["ok", "零 Gather"]]
      },
      title: {
        en: "Mip-NeRF 360 bicycle (6,131,954 SH3 Gaussians @ 4K)",
        zh: "Mip-NeRF 360 bicycle（613 万 SH3 高斯，4K）"
      },
      desc: {
        en: "6.13M anisotropic splats over park grass, spokes, and bench rendered at 3840×2160 in 386 ms on 4 chips.",
        zh: "613 万各向异性高斯在 4 芯 TPU v5p 上以 3840×2160 渲染，单帧 386 ms（2.59 FPS）。"
      }
    },
    {
      id: "kitchen_4k",
      cat: "gs3d",
      web: "./assets/singles/kitchen_4k.webp",
      png: "./assets/singles/kitchen_4k.webp",
      badges: {
        en: [["hot", "1.80M Real SH3"], ["", "4K 3.98 FPS"], ["ok", "4DGS Host Scene"]],
        zh: [["hot", "180 万 SH3 高斯"], ["", "4K 3.98 FPS"], ["ok", "4DGS 基础场景"]]
      },
      title: {
        en: "Mip-NeRF 360 kitchen + LEGO Dozer (4K @ 3.98 FPS)",
        zh: "Mip-NeRF 360 kitchen 厨房乐高场景（4K 3.98 FPS）"
      },
      desc: {
        en: "1.80M SH3 splats rendered at 4K in 251 ms (3.98 FPS), also serving as the background for the 4DGS Panda collision-push experiment.",
        zh: "180 万 SH3 高斯在 4K 下耗时 251 ms（3.98 FPS），同时用于 4DGS 机械臂推挤乐高推土机实验。"
      }
    },
    {
      id: "bonsai_4k",
      cat: "gs3d",
      web: "./assets/singles/bonsai_4k.webp",
      png: "./assets/singles/bonsai_4k.webp",
      badges: {
        en: [["hot", "1.24M Real SH3"], ["", "4K 4.20 FPS"], ["ok", "238 ms / Frame"]],
        zh: [["hot", "124 万 SH3 高斯"], ["", "4K 4.20 FPS"], ["ok", "238 ms / 帧"]]
      },
      title: {
        en: "Mip-NeRF 360 bonsai Indoor Scan (4K @ 4.20 FPS)",
        zh: "Mip-NeRF 360 bonsai 室内盆栽扫描（4K 4.20 FPS）"
      },
      desc: {
        en: "Bonsai pine needles and table reflections at 3840×2160 resolution in 238 ms on 4 TPU v5p chips.",
        zh: "4 芯 TPU v5p 渲染 3840×2160 室内盆栽松针与桌面反射，单帧 238 ms（4.20 FPS）。"
      }
    },
    {
      id: "bistro_humanoid_4k",
      cat: "gs3d",
      web: "./assets/singles/bistro_humanoid_4k.webp",
      png: "./assets/singles/bistro_humanoid_4k.webp",
      badges: {
        en: [["hot", "10M Bistro + MJX"], ["", "4K 2.28 FPS"], ["ok", "Exact Z-Composite"]],
        zh: [["hot", "1,000 万 Bistro + MJX"], ["", "4K 2.28 FPS"], ["ok", "Z-Buffer 深度混合"]]
      },
      title: {
        en: "10M-Gaussian Amazon Bistro × MJX Humanoid & Mobile Panda (4K)",
        zh: "1,000 万高斯 Amazon Bistro × MJX 人形与移动 Panda 机器人 (4K)"
      },
      desc: {
        en: "10M-splat street scene composited pixel-for-pixel via Z-depth with articulated MJX humanoid and mobile manipulator at 439.3 ms (4K).",
        zh: "1,000 万街区 3DGS 与 MJX 人形、移动机械臂按 Z 深度逐像素合成，4 芯 4K 单帧 439.3 ms（2.28 FPS）。"
      }
    },
    // --- MuJoCo Menagerie & Bimanual 72-Geom Proxy Singles (5 Robotics) ---
    {
      id: "robotwin_bimanual",
      cat: "robotics",
      web: "./assets/singles/robotwin_bimanual.webp",
      png: "./assets/singles/robotwin_bimanual.webp",
      badges: {
        en: [["hot", "72-Geom MJX Proxy"], ["", "64²: 123.9k cam-FPS"], ["ok", "Analytic Ray Cast"]],
        zh: [["hot", "72 刚体 MJX 代理"], ["", "64²: 123.9k cam-FPS"], ["ok", "解析光线投射"]]
      },
      title: {
        en: "Bimanual Tabletop (72-Geom MJX Proxy) — Analytic Ray Casting + Replicator DR",
        zh: "双臂桌面操控（72 刚体 MJX 代理）— 解析光线投射 + Replicator 域随机化"
      },
      desc: {
        en: "Procedural 72-primitive MJX bimanual tabletop proxy (not official SAPIEN RoboTwin; rendered at 1024×1024 for inspection). Benchmarked at 64×64 across 3 cams on 4 TPU v5p chips: 41,286 env-FPS (123,858 cam-FPS, +0.32% DR overhead).",
        zh: "72 个解析原语构建的 MJX 双臂桌面代理场景（非官方 SAPIEN RoboTwin；静态展示图以 1024×1024 渲染）。64×64 3 相机 4 芯 TPU v5p 实测 41,286 env-FPS（合计 123,858 cam-FPS，DR 开销 +0.32%）。"
      }
    },
    {
      id: "menagerie_g1",
      cat: "robotics",
      web: "./assets/singles/menagerie_g1.webp",
      png: "./assets/singles/menagerie_g1.webp",
      badges: {
        en: [["hot", "Unitree G1 (393k tris)"], ["", "2,546 FPS @ 64² (4c)"], ["ok", "1024² PBR"]],
        zh: [["hot", "宇树 G1 (39.3 万面)"], ["", "4 芯 64² 2,546 FPS"], ["ok", "1024² PBR"]]
      },
      title: {
        en: "Unitree G1 Humanoid — Unmodified Menagerie MJCF in Wide-BVH-64",
        zh: "宇树 Unitree G1 人形机器人 — Menagerie MJCF"
      },
      desc: {
        en: "393k mesh triangles from mujoco_menagerie compiled into MultiMeshBVHBank: 2,546 FPS (64², 4c) and 1024² GGX + 8-AO + 8-SoftShadow render.",
        zh: "官方 mujoco_menagerie 39.3 万三角面模型未做修改直接编入 MultiMeshBVHBank：4 芯 64² 为 2,546 FPS，另测 1024² GGX + 8-AO。"
      }
    },
    {
      id: "menagerie_go2",
      cat: "robotics",
      web: "./assets/singles/menagerie_go2.webp",
      png: "./assets/singles/menagerie_go2.webp",
      badges: {
        en: [["hot", "Unitree Go2 (398k tris)"], ["", "1,863 FPS @ 64² (4c)"], ["ok", "Zero Gather"]],
        zh: [["hot", "宇树 Go2 (39.8 万面)"], ["", "4 芯 64² 1,863 FPS"], ["ok", "零 Gather"]]
      },
      title: {
        en: "Unitree Go2 Quadruped — Official Menagerie MJCF + GGX Soft Shadows",
        zh: "宇树 Unitree Go2 四足机器人 — Menagerie MJCF + GGX 软阴影"
      },
      desc: {
        en: "398k chassis and actuator triangles running MJX forward kinematics inside TPU HBM at 1,863 FPS (64², 4c) with zero CPU sync.",
        zh: "39.8 万电机外壳与机身三角面连同 MJX 运动学链驻留 HBM，4 芯 64² 达 1,863 FPS。"
      }
    },
    {
      id: "menagerie_panda",
      cat: "robotics",
      web: "./assets/singles/menagerie_panda.webp",
      png: "./assets/singles/menagerie_panda.webp",
      badges: {
        en: [["hot", "Franka Panda Arm"], ["", "3,131 FPS @ 64² (4c)"], ["ok", "jax.grad Ready"]],
        zh: [["hot", "Franka Panda 机械臂"], ["", "4 芯 64² 3,131 FPS"], ["ok", "支持 jax.grad"]]
      },
      title: {
        en: "Franka Emika Panda 7-DOF Arm — Menagerie PBR + Soft Shadows",
        zh: "Franka Emika Panda 7 自由度机械臂 — Menagerie PBR"
      },
      desc: {
        en: "Compiled directly from Menagerie MJCF at 3,131 FPS (64², 4c); also used as the target arm for differentiable pixel-to-torque visual servoing.",
        zh: "直接由 Menagerie MJCF 编译，4 芯 64² 达 3,131 FPS，并用于第 05 章可微视觉伺服实验。"
      }
    },
    {
      id: "menagerie_aerohand",
      cat: "robotics",
      web: "./assets/singles/menagerie_aerohand.webp",
      png: "./assets/singles/menagerie_aerohand.webp",
      badges: {
        en: [["hot", "Tetheria Aero Hand"], ["", "4,284 FPS @ 64² (4c)"], ["ok", "Articulated Fingers"]],
        zh: [["hot", "Tetheria Aero Hand 灵巧手"], ["", "4 芯 64² 4,284 FPS"], ["ok", "多关节指节"]]
      },
      title: {
        en: "Tetheria Aero Hand — 4,284 FPS Multi-Link Raytracing",
        zh: "Tetheria Aero Hand 灵巧手 — 4,284 FPS 多关节光追"
      },
      desc: {
        en: "Multi-finger tendon manipulator traced inside Wide-BVH-64 at 4,284 FPS (64², 4c) for dexterous manipulation and GelSight experiments.",
        zh: "多指灵巧手在 Wide-BVH-64 中跑出 4,284 FPS（4 芯 64²），用于灵巧操作与视触觉实验。"
      }
    },
    // --- 2 QA-Rejected Post-Mortem Singles ---
    {
      id: "rejected_openusd_clay",
      cat: "rejected",
      web: "./assets/postmortem/rejected_openusd_clay.webp",
      png: "./assets/postmortem/rejected_openusd_clay.webp",
      badges: {
        en: [["fail", "Rejected"], ["", "Early OpenUSD Bug"], ["", "Untextured Clay"]],
        zh: [["fail", "已淘汰样本"], ["", "早期 OpenUSD 问题"], ["", "缺材质平淡着色"]]
      },
      title: {
        en: "Rejected Case A: Early Untextured OpenUSD Stage (v3_w2_openusd_4k)",
        zh: "淘汰样本 A：早期未绑定 Ptex 材质的 OpenUSD 渲染（v3_w2_openusd_4k）"
      },
      desc: {
        en: "Before full Disney Ptex and BSDF material binding, distant tropical foliage and lagoon waves collapsed into low-contrast flat clay. Excluded from main results and replaced by the updated Sunset and Daylight passes.",
        zh: "在接入完整的迪士尼 Ptex 纹理与水面 Fresnel/PBR 材质编译前，远景植被与海面曾退化为低对比度白模。该输出已从主结果中剔除。"
      }
    },
    {
      id: "rejected_garden_seams",
      cat: "rejected",
      web: "./assets/postmortem/rejected_garden_seams.webp",
      png: "./assets/postmortem/rejected_garden_seams.webp",
      badges: {
        en: [["fail", "Rejected"], ["", "16×16 Tile Seams"], ["", "Numerics Valid Only"]],
        zh: [["fail", "已淘汰样本"], ["", "16×16 分块接缝"], ["", "仅保留数值日志"]]
      },
      title: {
        en: "Rejected Case B: Early 32-View 3DGS Tile Clipping (garden)",
        zh: "淘汰样本 B：早期 32 视角 3DGS 分块截断接缝（garden）"
      },
      desc: {
        en: "Early local tile bounds clipped Gaussian tails at 16×16 boundaries, producing visible grid blocks and masked borders. Image excluded while preserving the verified 31.31 dB gradient telemetry.",
        zh: "早期局部 tile 边界截断了跨 16×16 分块的高斯尾迹，出现方块接缝与黑边。图像已从展示区移除，仅保留已验证的 31.31 dB 训练曲线日志。"
      }
    }
  ],

  stageStills: [
    {
      plateId: "moana_daylight_4k",
      tabIdx: { en: "OPENUSD · 4K DAYLIGHT", zh: "OPENUSD · 4K 晴天" },
      tabTitle: { en: "Moana Lagoon Daylight (22.3B Tris)", zh: "Moana 晴天泻湖 (223 亿面)" },
      hudL: { en: "<strong>Disney Moana OpenUSD v2.1</strong> · 22.30B Instanced Tris in 4.65 GiB HBM", zh: "<strong>迪士尼 Moana OpenUSD v2.1</strong> · 223 亿面编入 4.65 GiB HBM" },
      hudR: { en: "3840×2160 (4K) in <strong>5.13 s</strong> · Click frame to inspect", zh: "3840×2160 (4K) 耗时 <strong>5.13 s</strong> · 点击放大" }
    },
    {
      plateId: "moana_sunset",
      tabIdx: { en: "OPENUSD · 4K SUNSET", zh: "OPENUSD · 4K 日落" },
      tabTitle: { en: "Moana Sunset Lagoon (4K)", zh: "Moana 日落海湾 (4K)" },
      hudL: { en: "<strong>Disney Moana OpenUSD Sunset</strong> · Rayleigh Glare & Specular Ocean Waves", zh: "<strong>迪士尼 Moana 日落</strong> · Rayleigh 大气散射与海面高光" },
      hudR: { en: "3840×2160 (4K) in <strong>5.60 s</strong> · Click frame to inspect", zh: "3840×2160 (4K) 耗时 <strong>5.60 s</strong> · 点击放大" }
    },
    {
      plateId: "moana_8k_bay",
      tabIdx: { en: "OPENUSD · 8K UHD", zh: "OPENUSD · 8K UHD" },
      tabTitle: { en: "Moana Canopy & Ridge (8K)", zh: "Moana 热带树冠特写 (8K)" },
      hudL: { en: "<strong>Moana 8K (7680×4320, 33.18M px)</strong> · PointInstancer Traversal Across 4 Chips", zh: "<strong>Moana 8K (7680×4320)</strong> · 4 芯直接遍历 PointInstancer" },
      hudR: { en: "<strong>17.24 s</strong> on 4 Chips (gather_ops = 0) · Click frame to inspect", zh: "4 芯 <strong>17.24 s</strong> (gather_ops = 0) · 点击放大" }
    },
    {
      plateId: "bistro_humanoid_4k",
      tabIdx: { en: "3DGS × MJX · 10M STREET", zh: "3DGS × MJX · 1,000 万街区" },
      tabTitle: { en: "10M Bistro × MJX Robots (4K)", zh: "1,000 万 Bistro × 机器人 (4K)" },
      hudL: { en: "<strong>10M-Splat Amazon Bistro × MJX Humanoid & Panda</strong> · Exact Z-Depth Composite", zh: "<strong>1,000 万 Bistro × MJX 人形/熊猫机器人</strong> · Z 深度逐像素合成" },
      hudR: { en: "3840×2160 @ <strong>2.28 FPS</strong> (439.3 ms) · Click frame to inspect", zh: "4K <strong>2.28 FPS</strong> (439.3 ms) · 点击放大" }
    },
    {
      plateId: "robowild_panda_4k",
      tabIdx: { en: "3DGS × MJX · KITCHEN", zh: "3DGS × MJX · 厨房" },
      tabTitle: { en: "RoboWild Panda × Kitchen (4K)", zh: "RoboWild Panda × 厨房 (4K)" },
      hudL: { en: "<strong>RoboWild Franka Panda × Mip-NeRF Kitchen</strong> · 1.80M SH3 Splats + Analytical Shadow", zh: "<strong>RoboWild Franka × Mip-NeRF 厨房</strong> · 180 万 SH3 高斯 + 解析阴影" },
      hudR: { en: "3840×2160 (4K) · Exact Depth Occlusion · Click frame to inspect", zh: "3840×2160 (4K) · 精准深度遮挡 · 点击放大" }
    },
    {
      plateId: "prism_dispersion",
      tabIdx: { en: "OPTICS · CAUCHY PRISM", zh: "光学 · 棱镜色散" },
      tabTitle: { en: "6-Band Cauchy Prism Dispersion", zh: "6 波段柯西棱镜色散" },
      hudL: { en: "<strong>Spectral Cauchy Dispersion</strong> · Wavelength-Dependent IOR Splitting White Light", zh: "<strong>光谱柯西色散</strong> · 分波长折射率产生光谱焦散" },
      hudR: { en: "128 spp Path Tracing · Click frame to inspect", zh: "128 spp 路径追踪 · 点击放大" }
    },
    {
      plateId: "jade_sss",
      tabIdx: { en: "OPTICS · RANDOM-WALK SSS", zh: "光学 · 随机游走 SSS" },
      tabTitle: { en: "16-Step Volumetric Jade SSS", zh: "16 步随机游走玉石 SSS" },
      hudL: { en: "<strong>Volumetric Random-Walk SSS</strong> · 16 Mean-Free-Path Steps Inside Mesh", zh: "<strong>体内随机游走次表面散射</strong> · 网格内部 16 步平均自由程步进" },
      hudR: { en: "128 spp · gather_ops = 0 · Click frame to inspect", zh: "128 spp · gather_ops = 0 · 点击放大" }
    },
    {
      plateId: "cathedral_godrays",
      tabIdx: { en: "OPTICS · VOLUMETRIC FOG", zh: "光学 · 教堂体积光" },
      tabTitle: { en: "BVH-Shadowed Cathedral God Rays", zh: "BVH 阴影教堂体积光束" },
      hudL: { en: "<strong>Equi-Angular Volumetric Marching</strong> · BVH-Shadowed Stained-Glass Shafts", zh: "<strong>等角度体积光线步进</strong> · 结合 BVH 阴影查询" },
      hudR: { en: "192 spp Single XLA Graph · Click frame to inspect", zh: "192 spp 单 XLA 计算图 · 点击放大" }
    }
  ],

  robotStills: ["menagerie_panda", "menagerie_aerohand"],

  videoStageCh3: [
    {
      id: "mipnerf_garden_4k",
      cat: "gs3d",
      mp4: "./assets/videos/mipnerf_garden_4k.mp4",
      poster: "./assets/videos/mipnerf_garden_4k_poster.jpg",
      tabIdx: { en: "4K · 5.83M SH3", zh: "4K · 583 万高斯" },
      tabTitle: { en: "Mip-NeRF 360 Garden (4K)", zh: "Mip-NeRF 360 Garden (4K)" },
      hudL: { en: "<strong>Mip-NeRF 360 Garden (4K, 30 fps)</strong> · 5,834,784 SH3 Gaussians · 4 TPU v5p Chips", zh: "<strong>Mip-NeRF 360 花园 (4K, 30 fps)</strong> · 583 万 SH3 高斯 · 4 芯 TPU v5p" },
      hudR: { en: "3840×2160 · Zero HBM Gathers", zh: "3840×2160 · 零 HBM Gather" }
    },
    {
      id: "robowild_4dgs_push_4k",
      cat: "gs3d",
      mp4: "./assets/videos/robowild_4dgs_push_4k.mp4",
      poster: "./assets/videos/robowild_4dgs_push_4k_poster.jpg",
      tabIdx: { en: "4K · 4DGS × MJX", zh: "4K · 4DGS × MJX" },
      tabTitle: { en: "Panda × 4DGS Dozer Push (4K)", zh: "Panda 推 4DGS 推土机 (4K)" },
      hudL: { en: "<strong>RoboWild 4DGS × MJX Push (4K)</strong> · SE(3) Rigid Gaussians + Analytical Panda Shadows", zh: "<strong>RoboWild 4DGS × MJX 推挤 (4K)</strong> · 乐高推土机 SE(3) 联动 + 桌面阴影" },
      hudR: { en: "3840×2160 · Single XLA Graph", zh: "3840×2160 · 单张 XLA 计算图" }
    },
    {
      id: "mipnerf_bicycle_4k",
      cat: "gs3d",
      mp4: "./assets/videos/mipnerf_bicycle_4k.mp4",
      poster: "./assets/videos/mipnerf_bicycle_4k_poster.jpg",
      tabIdx: { en: "4K · 6.13M SH3", zh: "4K · 613 万高斯" },
      tabTitle: { en: "Mip-NeRF 360 Bicycle (4K)", zh: "Mip-NeRF 360 Bicycle (4K)" },
      hudL: { en: "<strong>Mip-NeRF 360 Bicycle (4K)</strong> · 6,131,954 SH3 Splats", zh: "<strong>Mip-NeRF 360 Bicycle (4K)</strong> · 613 万 SH3 高斯" },
      hudR: { en: "3840×2160 · 4-Chip TPU v5p · gather_ops = 0", zh: "3840×2160 · 4 芯 TPU v5p · gather_ops = 0" }
    },
    {
      id: "mipnerf_bonsai_4k",
      cat: "gs3d",
      mp4: "./assets/videos/mipnerf_bonsai_4k.mp4",
      poster: "./assets/videos/mipnerf_bonsai_4k_poster.jpg",
      tabIdx: { en: "4K · 1.24M SH3", zh: "4K · 124 万高斯" },
      tabTitle: { en: "Mip-NeRF 360 Bonsai (4K)", zh: "Mip-NeRF 360 Bonsai (4K)" },
      hudL: { en: "<strong>Mip-NeRF 360 Bonsai (4K)</strong> · 1,244,819 SH3 Splats", zh: "<strong>Mip-NeRF 360 Bonsai (4K)</strong> · 124 万 SH3 高斯" },
      hudR: { en: "3840×2160 · 4.20 FPS Live 4K Raster", zh: "3840×2160 · 4 芯实测 4.20 FPS" }
    },
    {
      id: "mipnerf_counter_orbit",
      cat: "gs3d",
      mp4: "./assets/videos/mipnerf_counter_orbit.mp4",
      poster: "./assets/videos/mipnerf_counter_orbit_poster.jpg",
      tabIdx: { en: "1080p · SH3 ORBIT", zh: "1080p · SH3 环绕" },
      tabTitle: { en: "Mip-NeRF Countertop", zh: "Mip-NeRF Countertop" },
      hudL: { en: "<strong>Mip-NeRF 360 Counter (1920×1080, 120f)</strong> · Specular Jar & Kitchen Orbit", zh: "<strong>Mip-NeRF 360 Counter (1080p, 120 帧)</strong> · 玻璃罐与厨房台面环绕" },
      hudR: { en: "1920×1080 · Two-Band EWA Splatting", zh: "1920×1080 · 双频 EWA 高斯投影" }
    },
    {
      id: "mipnerf_stump_orbit",
      cat: "gs3d",
      mp4: "./assets/videos/mipnerf_stump_orbit.mp4",
      poster: "./assets/videos/mipnerf_stump_orbit_poster.jpg",
      tabIdx: { en: "1080p · 4.96M SH3", zh: "1080p · 496 万高斯" },
      tabTitle: { en: "Mip-NeRF Forest Stump", zh: "Mip-NeRF Forest Stump" },
      hudL: { en: "<strong>Mip-NeRF 360 Stump (1080p)</strong> · 4,961,797 SH3 Gaussians", zh: "<strong>Mip-NeRF 360 Stump (1080p)</strong> · 496 万 SH3 高斯" },
      hudR: { en: "1920×1080 · 62.4 s Total Render (150f)", zh: "1920×1080 · 4 芯渲染 150 帧耗时 62.4 s" }
    },
    {
      id: "thinlens_bokeh_dolly_4k",
      cat: "optics",
      mp4: "./assets/videos/thinlens_bokeh_dolly_4k.mp4",
      poster: "./assets/videos/thinlens_bokeh_dolly_4k_poster.jpg",
      tabIdx: { en: "4K · f/1.4 DOLLY", zh: "4K · f/1.4 移轴视差" },
      tabTitle: { en: "Thin-Lens Parallax + Focus (4K)", zh: "薄透镜视差与对焦 (4K)" },
      hudL: { en: "<strong>Stochastic Thin-Lens Camera (4K, 32 spp)</strong> · Concentric-Disk Aperture + Cranley-Patterson", zh: "<strong>随机薄透镜相机 (4K, 32 spp)</strong> · 同心圆盘光圈采样 + 横移视差" },
      hudR: { en: "3840×2160 · Mosaic Pallas Kernel", zh: "3840×2160 · Mosaic Pallas 内核" }
    },
    {
      id: "thinlens_bokeh_pull_4k",
      cat: "optics",
      mp4: "./assets/videos/thinlens_bokeh_pull_4k.mp4",
      poster: "./assets/videos/thinlens_bokeh_pull_4k_poster.jpg",
      tabIdx: { en: "4K · FOCUS RACK", zh: "4K · 景深拉焦" },
      tabTitle: { en: "55mm f/1.4 Focus Rack (4K)", zh: "55mm f/1.4 前后拉焦 (4K)" },
      hudL: { en: "<strong>55mm f/1.4 Focus Pull (0.78 m ↔ 2.25 m)</strong> · Foreground Sphere to Bokeh Circles", zh: "<strong>55mm f/1.4 景深变焦 (0.78 m ↔ 2.25 m)</strong> · 前景球体至背景散景光斑" },
      hudR: { en: "3840×2160 · 32 spp ACES Filmic", zh: "3840×2160 · 32 spp ACES 色调映射" }
    },
    {
      id: "cloth_bvh_refit",
      cat: "optics",
      mp4: "./assets/videos/cloth_bvh_refit.mp4",
      poster: "./assets/videos/cloth_bvh_refit_poster.jpg",
      tabIdx: { en: "OPTIX · BVH REFIT", zh: "OPTIX · BVH 重拟合" },
      tabTitle: { en: "PBD Silk Cloth BVH Refit", zh: "PBD 布料动态 BVH Refit" },
      hudL: { en: "<strong>Deformable Silk Cloth (32,768 Tris)</strong> · Bottom-Up L0→L1→L2 Wide-BVH-64 Refit in XLA", zh: "<strong>可变形丝绸布料 (32,768 面)</strong> · XLA 图内自底向上 Wide-BVH-64 重拟合" },
      hudR: { en: "<strong>0.0 m</strong> Depth Error vs. CPU Rebuild", zh: "对比 CPU 重建 <strong>0.0 m</strong> 误差" }
    },
    {
      id: "relight_tod_sweep",
      cat: "relight",
      mp4: "./assets/videos/relight_tod_sweep.mp4",
      poster: "./assets/videos/relight_tod_sweep_poster.jpg",
      tabIdx: { en: "MXU · 0-RAYTRACE", zh: "MXU · 零光追昼夜" },
      tabTitle: { en: "Classroom Sunlit Time-of-Day", zh: "教室太阳方位角连续变换" },
      hudL: { en: "<strong>Static G-Buffer Relighting</strong> · Morning → Noon → 2600K Sunset → 9500K Twilight", zh: "<strong>静态 G-Buffer 零光追重打光</strong> · 清晨 → 正午 → 2600K 日落 → 9500K 暮光" },
      hudR: { en: "0 Raytrace Ops/Frame · 307 FPS 1080p / 78.6 FPS 4K", zh: "逐帧 0 光追 · 1080p 307 FPS / 4K 78.6 FPS" }
    },
    {
      id: "relight_material_sweep",
      cat: "relight",
      mp4: "./assets/videos/relight_material_sweep.mp4",
      poster: "./assets/videos/relight_material_sweep_poster.jpg",
      tabIdx: { en: "MXU · BRDF SWEEP", zh: "MXU · 材质连续变化" },
      tabTitle: { en: "Cornell Workshop Material Sweep", zh: "康奈尔工坊材质连续变化" },
      hudL: { en: "<strong>Zero-Raytrace FiLM BRDF Sweep</strong> · Matte Clay → Satin → Brushed Gold → Chrome", zh: "<strong>零光追 FiLM 材质参数扫掠</strong> · 哑光 → 缎面 → 拉丝金 → 铬合金" },
      hudR: { en: "0 Raytrace Ops/Frame · Matched to 4-Bounce MC GT", zh: "逐帧 0 光追 · 对齐 4-Bounce 蒙特卡洛参考" }
    }
  ],

  videoStageCh5: [
    {
      id: "robotwin_bimanual",
      mp4: "./assets/videos/robotwin_bimanual.mp4",
      poster: "./assets/videos/robotwin_bimanual_poster.jpg",
      tabIdx: { en: "BIMANUAL · 72-GEOM PROXY", zh: "双臂 · 72 刚体代理" },
      tabTitle: { en: "Bimanual Tabletop (72-Geom Proxy)", zh: "双臂桌面代理（72 解析刚体）" },
      hudL: { en: "<strong>Bimanual Tabletop Proxy (1024×1024 video)</strong> · 72 Analytic MJX Geoms (not SAPIEN RoboTwin)", zh: "<strong>双臂桌面代理 (1024×1024 录屏)</strong> · 72 解析刚体（非 SAPIEN RoboTwin）" },
      hudR: { en: "<strong>64×64 Bench: 41,286 env-FPS</strong> (3 cams = 123.9k cam-FPS) · 0 CPU Callbacks", zh: "<strong>64×64 实测 41,286 env-FPS</strong>（3 相机 123.9k cam-FPS）· 零回调" }
    },
    {
      id: "diffphys_servoing",
      mp4: "./assets/videos/diffphys_servoing.mp4",
      poster: "./assets/videos/diffphys_servoing_poster.jpg",
      tabIdx: { en: "JAX.GRAD · SERVOING", zh: "JAX.GRAD · 视觉伺服" },
      tabTitle: { en: "Pixel-to-Torque jax.grad (1024²)", zh: "纯像素反传力矩伺服 (1024²)" },
      hudL: { en: "<strong>240-Iter jax.value_and_grad(mjx.step + PBR)</strong> · Optimized from RGB Loss Only", zh: "<strong>240 步 jax.value_and_grad(mjx.step + PBR)</strong> · 仅凭 RGB 像素损失优化" },
      hudR: { en: "<strong>36.08 dB</strong> · <strong>1.63 cm EE Error</strong> in 8.61 s", zh: "8.61 s 收敛至 <strong>36.08 dB</strong> / 误差 <strong>1.63 cm</strong>" }
    },
    {
      id: "menagerie_g1_orbit",
      mp4: "./assets/videos/menagerie_g1_orbit.mp4",
      poster: "./assets/videos/menagerie_g1_orbit_poster.jpg",
      tabIdx: { en: "MENAGERIE · G1", zh: "MENAGERIE · G1" },
      tabTitle: { en: "Unitree G1 Humanoid (1024²)", zh: "宇树 G1 人形机器人 (1024²)" },
      hudL: { en: "<strong>MuJoCo Menagerie Unitree G1</strong> · 393k Tris · Wide-BVH-64 + Hemisphere AO", zh: "<strong>MuJoCo Menagerie 宇树 G1</strong> · 39.3 万面 · Wide-BVH-64 + AO" },
      hudR: { en: "<strong>2,546 FPS</strong> @ 64² (4 Chips)", zh: "4 芯 64² 实测 <strong>2,546 FPS</strong>" }
    },
    {
      id: "menagerie_go2_orbit",
      mp4: "./assets/videos/menagerie_go2_orbit.mp4",
      poster: "./assets/videos/menagerie_go2_orbit_poster.jpg",
      tabIdx: { en: "MENAGERIE · GO2", zh: "MENAGERIE · GO2" },
      tabTitle: { en: "Unitree Go2 Quadruped (1024²)", zh: "宇树 Go2 四足机器人 (1024²)" },
      hudL: { en: "<strong>MuJoCo Menagerie Unitree Go2</strong> · 398k Tris · Soft Shadows", zh: "<strong>MuJoCo Menagerie 宇树 Go2</strong> · 39.8 万面 · 软阴影" },
      hudR: { en: "<strong>1,863 FPS</strong> @ 64² (4 Chips) · gather_ops = 0", zh: "4 芯 64² 实测 <strong>1,863 FPS</strong> · gather_ops = 0" }
    },
    {
      id: "humanoid_running_orbit",
      mp4: "./assets/videos/humanoid_running_orbit.mp4",
      poster: "./assets/videos/humanoid_running_orbit_poster.jpg",
      tabIdx: { en: "MJX · HUMANOID", zh: "MJX · 人形步态" },
      tabTitle: { en: "21-DOF Humanoid Running (1024²)", zh: "21 自由度人形奔跑步态 (1024²)" },
      hudL: { en: "<strong>Humanoid Running Cycle</strong> · 16-Sample AO + Soft Shadow + AgX", zh: "<strong>人形机器人奔跑循环</strong> · 16 采样 AO + 软阴影 + AgX" },
      hudR: { en: "<strong>292,000 env/s</strong> Vision PPO in HBM", zh: "4 芯 Vision PPO <strong>292,000 env/s</strong>" }
    },
    {
      id: "quadruped_trot_orbit",
      mp4: "./assets/videos/quadruped_trot_orbit.mp4",
      poster: "./assets/videos/quadruped_trot_orbit_poster.jpg",
      tabIdx: { en: "MJX · QUADRUPED", zh: "MJX · 四足小跑" },
      tabTitle: { en: "12-DOF Quadruped Trot (1024²)", zh: "12 自由度四足对角小跑 (1024²)" },
      hudL: { en: "<strong>Quadruped Diagonal Trot Gait (1024×1024)</strong> · Checkerboard Floor + Joint Kinematics", zh: "<strong>四足对角小跑步态 (1024×1024)</strong> · 棋盘地面 + 关节运动学" },
      hudR: { en: "4-Chip TPU-RTX · host_callbacks = 0", zh: "4 芯 TPU-RTX · host_callbacks = 0" }
    }
  ],

  heroStage: [
    {
      video: "./assets/videos/robowild_4dgs_push_4k.mp4",
      poster: "./assets/videos/robowild_4dgs_push_4k_poster.jpg",
      hudL: {
        en: "<strong>4K Video · 4DGS × MJX</strong> · 7-DOF Panda Pushing 125.6k-Splat LEGO Dozer",
        zh: "<strong>4K 视频 · 4DGS × MJX</strong> · 7 自由度 Panda 机械臂推挤 12.56 万高斯乐高推土机"
      },
      hudR: {
        en: "3840×2160 · Physics + 3DGS + Shadows in One XLA Graph",
        zh: "3840×2160 · 物理、3DGS 与阴影同驻单张 XLA 计算图"
      }
    },
    {
      plateId: "moana_mjx_beach",
      hudL: {
        en: "<strong>OpenUSD × MJX</strong> · 22.30B-Tri Moana Island + 45 Live MJX Robot Geoms",
        zh: "<strong>OpenUSD × MJX</strong> · 223 亿面 Moana 场景与 45 个实时 MJX 刚体"
      },
      hudR: {
        en: "3840×2160 in <strong>5.40 s</strong> · Click image for Lightbox",
        zh: "3840×2160 单帧 <strong>5.40 s</strong> · 点击图像放大"
      }
    },
    {
      plateId: "bistro_humanoid_4k",
      hudL: {
        en: "<strong>Real-to-Sim 3DGS × MJX</strong> · 10M-Splat Amazon Bistro + Humanoid & Mobile Panda",
        zh: "<strong>Real-to-Sim 3DGS × MJX</strong> · 1,000 万 Bistro 街区与双机器人"
      },
      hudR: {
        en: "3840×2160 @ <strong>2.28 FPS</strong> (439.3 ms, gather_ops = 0) · Click to inspect",
        zh: "3840×2160 <strong>2.28 FPS</strong>（439.3 ms，gather_ops = 0）· 点击放大"
      }
    },
    {
      plateId: "barcelona_tpu",
      hudL: {
        en: "<strong>Blender Open Data</strong> · Barcelona Pavilion (54.91M Unique Tris)",
        zh: "<strong>Blender Open Data</strong> · 巴塞罗那展馆（5,491 万唯一三角面）"
      },
      hudR: {
        en: "3840×2160 @ <strong>1.11 img/s</strong> · <strong>15.94 mm</strong> Z-MAE · Click to inspect",
        zh: "3840×2160 <strong>1.11 img/s</strong> · 深度误差 <strong>15.94 mm</strong> · 点击放大"
      }
    }
  ],

  compareLabs: {
    blender: {
      title: {
        en: "Comparison 01 · TPU-RTX vs. Blender Cycles Reference EXR (6 Scenes)",
        zh: "对比 01 · TPU-RTX 与官方 Blender Cycles 参考 EXR（6 个场景）"
      },
      presets: [
        {
          id: "barcelona",
          tab: { en: "Barcelona (54.9M)", zh: "巴塞罗那馆 (5,491 万面)" },
          aImg: "./assets/compare/barcelona_a.webp",
          bImg: "./assets/compare/barcelona_b.webp",
          aLbl: { en: "Left: TPU-RTX (54.91M Tris, 15.94 mm Z-MAE)", zh: "左：TPU-RTX（5,491 万面，深度误差 15.94 mm）" },
          bLbl: { en: "Right: Blender Cycles Reference EXR", zh: "右：Blender Cycles 参考 EXR" }
        },
        {
          id: "bmw",
          tab: { en: "BMW27 (37.65 dB)", zh: "BMW27 (37.65 dB)" },
          aImg: "./assets/compare/bmw_a.webp",
          bImg: "./assets/compare/bmw_b.webp",
          aLbl: { en: "Left: TPU-RTX Wide-BVH-64 + AgX (0.9813 SSIM)", zh: "左：TPU-RTX Wide-BVH-64 + AgX（SSIM 0.9813）" },
          bLbl: { en: "Right: Blender Cycles Reference EXR", zh: "右：Blender Cycles 参考 EXR" }
        },
        {
          id: "monster",
          tab: { en: "Monster SSS (36.98 dB)", zh: "床下怪兽 SSS (36.98 dB)" },
          aImg: "./assets/compare/monster_a.webp",
          bImg: "./assets/compare/monster_b.webp",
          aLbl: { en: "Left: TPU-RTX 1024² (36.98 dB, 0.121 mm Z-MAE)", zh: "左：TPU-RTX 1024²（36.98 dB，深度误差 0.121 mm）" },
          bLbl: { en: "Right: Blender Cycles Reference EXR", zh: "右：Blender Cycles 参考 EXR" }
        },
        {
          id: "fishycat",
          tab: { en: "Fishy Cat (28.80 dB)", zh: "Fishy Cat (28.80 dB)" },
          aImg: "./assets/compare/fishycat_a.webp",
          bImg: "./assets/compare/fishycat_b.webp",
          aLbl: { en: "Left: TPU-RTX (7,255 Fur Instances, 0.9592 SSIM)", zh: "左：TPU-RTX（7,255 毛发实例，SSIM 0.9592）" },
          bLbl: { en: "Right: Blender Cycles Reference EXR", zh: "右：Blender Cycles 参考 EXR" }
        },
        {
          id: "barbershop",
          tab: { en: "Barbershop (31.00 dB)", zh: "理发店 (31.00 dB)" },
          aImg: "./assets/compare/barbershop_a.webp",
          bImg: "./assets/compare/barbershop_b.webp",
          aLbl: { en: "Left: TPU-RTX (8.55M Tris, 31.00 dB Orbit)", zh: "左：TPU-RTX（855 万面，环绕 31.00 dB）" },
          bLbl: { en: "Right: Blender Cycles Reference EXR", zh: "右：Blender Cycles 参考 EXR" }
        },
        {
          id: "lonemonk",
          tab: { en: "Lone Monk (20.1M)", zh: "独行僧侣 (2,014 万面)" },
          aImg: "./assets/compare/lonemonk_a.webp",
          bImg: "./assets/compare/lonemonk_b.webp",
          aLbl: { en: "Left: TPU-RTX (28.83 dB, 18.91 mm Z-MAE)", zh: "左：TPU-RTX（28.83 dB，深度误差 18.91 mm）" },
          bLbl: { en: "Right: Blender Cycles Reference EXR", zh: "右：Blender Cycles 参考 EXR" }
        }
      ]
    },
    optics: {
      title: {
        en: "Comparison 02 · Physical Optics, 4K Bokeh, ReSTIR DI & Deformable Cloth (8 Presets)",
        zh: "对比 02 · 物理光学、4K 景深、ReSTIR DI 与可变形布料（8 组对照）"
      },
      presets: [
        {
          id: "thinfilm",
          tab: { en: "Thin-Film + Aniso GGX", zh: "Airy 薄膜 + 各向异性 GGX" },
          aImg: "./assets/compare/thinfilm_a.webp",
          bImg: "./assets/compare/thinfilm_b.webp",
          aLbl: { en: "Left: Isotropic Baseline", zh: "左：各向同性基线（无薄膜干涉）" },
          bLbl: { en: "Right: 8-Bin Airy Thin-Film + Radial Aniso GGX", zh: "右：8 波段 Airy 薄膜干涉 + 径向各向异性 GGX" }
        },
        {
          id: "mirror",
          tab: { en: "2 vs. 12-Bounce Mirrors", zh: "2 次 vs. 12 次镜面反射" },
          aImg: "./assets/compare/mirror_a.webp",
          bImg: "./assets/compare/mirror_b.webp",
          aLbl: { en: "Left: max_bounces = 2", zh: "左：max_bounces = 2（二次反射截断）" },
          bLbl: { en: "Right: 12-Bounce XLA while_loop", zh: "右：单 XLA while_loop 12 次深度反射" }
        },
        {
          id: "bokeh",
          tab: { en: "4K f/1.4 Near vs. Far Focus", zh: "4K f/1.4 前后焦点" },
          aImg: "./assets/compare/bokeh_a.webp",
          bImg: "./assets/compare/bokeh_b.webp",
          aLbl: { en: "Left: 4K 55mm f/1.4 Near Focus (108.7 ms)", zh: "左：4K 55mm f/1.4 近焦（108.7 ms）" },
          bLbl: { en: "Right: 4K 55mm f/1.4 Far Focus Pull", zh: "右：4K 55mm f/1.4 远焦" }
        },
        {
          id: "dispersion",
          tab: { en: "Cauchy Prism Dispersion", zh: "柯西棱镜色散" },
          aImg: "./assets/compare/dispersion_a.webp",
          bImg: "./assets/compare/dispersion_b.webp",
          aLbl: { en: "Left: Fixed-IOR Glass", zh: "左：固定折射率玻璃（无色散）" },
          bLbl: { en: "Right: 6-Band Cauchy Spectral Dispersion", zh: "右：6 波段柯西分波长色散" }
        },
        {
          id: "sss",
          tab: { en: "Jade Random-Walk SSS", zh: "玉石随机游走 SSS" },
          aImg: "./assets/compare/sss_a.webp",
          bImg: "./assets/compare/sss_b.webp",
          aLbl: { en: "Left: Opaque Dielectric", zh: "左：不透明电介质对照" },
          bLbl: { en: "Right: 16-Step Random-Walk Volumetric SSS", zh: "右：16 步体内随机游走次表面散射" }
        },
        {
          id: "godrays",
          tab: { en: "Cathedral God Rays", zh: "教堂体积散射光" },
          aImg: "./assets/compare/godrays_a.webp",
          bImg: "./assets/compare/godrays_b.webp",
          aLbl: { en: "Left: Vacuum Transport (No Media)", zh: "左：无参与介质" },
          bLbl: { en: "Right: BVH-Shadowed Volumetric Scattering", zh: "右：BVH 阴影体积散射光束" }
        },
        {
          id: "restir",
          tab: { en: "1,024-Light ReSTIR DI", zh: "1,024 光源 ReSTIR DI" },
          aImg: "./assets/compare/restir_a.webp",
          bImg: "./assets/compare/restir_b.webp",
          aLbl: { en: "Left: Equal-Ray Naive MIS (10.29 dB)", zh: "左：等预算朴素 MIS (10.29 dB)" },
          bLbl: { en: "Right: TPU-ReSTIR DI + Denoise (21.89 dB, 7.43× VarRed)", zh: "右：TPU-ReSTIR DI + 降噪（21.89 dB，方差降 7.43×）" }
        },
        {
          id: "cloth",
          tab: { en: "Cloth BVH Refit (973 FPS)", zh: "布料 BVH Refit (973 FPS)" },
          aImg: "./assets/compare/cloth_a.webp",
          bImg: "./assets/compare/cloth_b.webp",
          aLbl: { en: "Left: Frame t=0 (32,768 Dynamic Tris)", zh: "左：t=0 初始帧（32,768 动态面）" },
          bLbl: { en: "Right: Frame t=96 (973 FPS Refit, 0.0 m MAE)", zh: "右：t=96 悬垂帧（973 FPS Refit，0.0 m 误差）" }
        }
      ]
    },
    neural: {
      title: {
        en: "Comparison 03 · 4DGS Contact, TPU-DLSS 3.5, 4K Denoiser & Relighting (5 Presets)",
        zh: "对比 03 · 4DGS 接触推挤、TPU-DLSS 3.5、4K 降噪与零光追重打光（5 组对照）"
      },
      presets: [
        {
          id: "robowild4d",
          tab: { en: "4DGS × MJX Push (+16.4 cm)", zh: "4DGS × MJX 推挤 (+16.4 cm)" },
          aImg: "./assets/compare/robowild4d_a.webp",
          bImg: "./assets/compare/robowild4d_b.webp",
          aLbl: { en: "Left: t=0 Before Contact (125.6k LEGO Splats)", zh: "左：t=0 接触前（12.56 万乐高高斯）" },
          bLbl: { en: "Right: After MJX Push (+16.43 cm / −17.71°, 5.32 FPS 1080p)", zh: "右：推挤后（+16.43 cm / −17.71°，1080p 5.32 FPS）" }
        },
        {
          id: "denoise",
          tab: { en: "1-spp → 4K Denoiser (87.8 FPS)", zh: "1-spp → 4K 降噪 (87.8 FPS)" },
          aImg: "./assets/compare/denoise_a.webp",
          bImg: "./assets/compare/denoise_b.webp",
          aLbl: { en: "Left: 1-spp 4-Bounce Monte Carlo (9.70 dB)", zh: "左：1-spp 4 反弹原始输入 (9.70 dB)" },
          bLbl: { en: "Right: BF16 MXU 4K Denoiser (24.92 dB, 11.39 ms)", zh: "右：BF16 MXU 4K 降噪输出（24.92 dB，11.39 ms）" }
        },
        {
          id: "dlss",
          tab: { en: "TPU-DLSS 3.5 (58.9 FPS 4K)", zh: "TPU-DLSS 3.5 (4K 58.9 FPS)" },
          aImg: "./assets/compare/dlss_a.webp",
          bImg: "./assets/compare/dlss_b.webp",
          aLbl: { en: "Left: Noisy 1080p 1-spp Input", zh: "左：1080p 1-spp 噪点输入" },
          bLbl: { en: "Right: 4K TPU-DLSS 3.5 Output (58.93 FPS, 3.91× Speedup)", zh: "右：4K TPU-DLSS 3.5 输出（58.93 FPS，提速 3.91×）" }
        },
        {
          id: "material",
          tab: { en: "Matte → Chrome (0 Raytrace)", zh: "哑光 → 铬合金 (0 光追)" },
          aImg: "./assets/compare/material_a.webp",
          bImg: "./assets/compare/material_b.webp",
          aLbl: { en: "Left: Matte Clay (rough=0.88)", zh: "左：哑光材质（rough=0.88，含参考小窗）" },
          bLbl: { en: "Right: Brushed Chrome (metal=1.00, 78.6 FPS 4K)", zh: "右：铬合金（4K BF16 78.6 FPS）" }
        },
        {
          id: "tod",
          tab: { en: "2600K Sunset → 9500K Twilight", zh: "2600K 日落 → 9500K 暮光" },
          aImg: "./assets/compare/tod_a.webp",
          bImg: "./assets/compare/tod_b.webp",
          aLbl: { en: "Left: Sunset (2600K)", zh: "左：日落暖光（2600K，含参考小窗）" },
          bLbl: { en: "Right: Twilight (9500K, 307 FPS 1080p / 78.6 FPS 4K)", zh: "右：暮光（9500K，1080p 307 FPS / 4K 78.6 FPS）" }
        }
      ]
    }
  },

  benchmarks: {
    mjx: {
      title: {
        en: "Embodied Robotics, Isaac Replicator DR, Menagerie, Tactile & Sim-to-VLA",
        zh: "具身机器人、Isaac 域随机化、Menagerie、GelSight 触觉与 Sim-to-VLA"
      },
      note: {
        en: "Physics, ray tracing, domain randomization, and policy updates run in one TPU HBM XLA graph (host_callbacks = 0).",
        zh: "物理步进、光线追踪、域随机化与策略训练在同一张 TPU HBM XLA 图内完成（host_callbacks = 0）。"
      },
      rows: [
        { label: { en: "V3 Fused 4c MJX + Render (64×64, B=8192)", zh: "V3 融合 4 芯 MJX + 渲染 (64×64, B=8192)" }, val: 266209, unit: "FPS E2E", pct: 98, extra: { en: "921,309 render-equiv", zh: "921,309 纯渲染等效" } },
        { label: { en: "4-Sensor Visuo-Tactile GelSight + Cams (4c)", zh: "4 路视触觉 GelSight + 相机 (4 芯)" }, val: 270625, unit: "sensor-FPS", pct: 100, extra: { en: "67,656 env-steps/s (+0.15% DR)", zh: "67,656 env/s (+0.15% DR)" } },
        { label: { en: "Bimanual 72-Geom Proxy 3-Cam + DR (64×64, 4c)", zh: "72 刚体双臂代理三摄 + DR (64×64, 4 芯)" }, val: 123858, unit: "cam-FPS", pct: 46, extra: { en: "41,286 env/s (+0.32% DR)", zh: "41,286 env/s (+0.32% DR)" } },
        { label: { en: "Closed-Loop Vision PPO Cartpole (4c)", zh: "零拷贝闭环 Vision PPO Cartpole (4 芯)" }, val: 656358, unit: "env-steps/s", pct: 95, extra: { en: "steady · Panda 211.6k / Humanoid 292.0k", zh: "稳态 · Panda 211.6k / Humanoid 292.0k" } },
        { label: { en: "Factory G=2048 Sim-to-VLA ViT-Tiny (4c)", zh: "G=2048 在线 Sim-to-VLA ViT-Tiny (4 芯)" }, val: 7143, unit: "frames/s", pct: 12, extra: { en: "1M frames / 142.6 s · −1.84% VLA", zh: "百万帧 142.6 s · −1.84% 开销" } },
        { label: { en: "MuJoCo Menagerie Wide-BVH-64 (4c)", zh: "MuJoCo Menagerie Wide-BVH-64 (4 芯)" }, val: 4284, unit: "FPS (64²)", pct: 8, extra: { en: "3,131 Panda / 2,546 G1 / 1,863 Go2", zh: "Panda 3,131 / G1 2,546 / Go2 1,863" } },
        { label: { en: "Diff MJX + PBR Visual Servoing (1c)", zh: "端到端可微 MJX + 光追视觉伺服 (1 芯)" }, val: 27.9, unit: "grad-steps/s", pct: 4, extra: { en: "36.08 dB · 1.63 cm EE err", zh: "36.08 dB · 末端误差 1.63 cm" } }
      ]
    },
    gs3d: {
      title: {
        en: "3DGS / 4DGS × MJX & 300M-Splat 4-Chip HBM Scaling",
        zh: "3DGS / 4DGS × MJX 与 4 芯 3 亿高斯容量测试"
      },
      note: {
        en: "Zero dynamic HBM gathers; scales from 142k FPS (N=2048) to 300M Gaussians (79.44% of 4-chip 380 GB HBM) and 8K photogrammetry.",
        zh: "无动态 HBM Gather；N=2048 下 4 芯 142,008 FPS，容量达单机 4 芯 3 亿高斯（占 380 GB 显存 79.44%）。"
      },
      rows: [
        { label: { en: "V2 jax_tile Baseline (1c 64×64, N=2048)", zh: "V2 jax_tile 基线 (1 芯 64×64, N=2048)" }, val: 1194, unit: "FPS", pct: 2, extra: { en: "baseline (Pallas v1 was 659)", zh: "基线 (初版 Pallas 659)" }, base: true },
        { label: { en: "V3 gs3d_v3 BF16-MXU (1c 64×64, N=2048)", zh: "V3 gs3d_v3 BF16-MXU (1 芯 64×64)" }, val: 35916, unit: "FPS", pct: 25, extra: { en: "30.1× V2", zh: "30.1× 加速" } },
        { label: { en: "V3 gs3d_v3 BF16-MXU (4c shard_map, 64×64)", zh: "V3 gs3d_v3 4 芯扩展 (64×64)" }, val: 142008, unit: "FPS", pct: 100, extra: { en: "155,858 FPS @ 128²", zh: "128² 实测 155,858 FPS" } },
        { label: { en: "4c 32-View jax.grad Training (garden)", zh: "4 芯 32 视角 jax.grad 训练 (garden)" }, val: 749, unit: "view-steps/s", pct: 18, extra: { en: "23.4 steps/s → 31.31 dB peak", zh: "23.4 steps/s · 峰值 31.31 dB" } },
        { label: { en: "Mip-NeRF 360 4K Scans (SH3)", zh: "Mip-NeRF 360 4K 扫描 (SH3)" }, val: 4.20, unit: "FPS @ 4K", pct: 12, extra: { en: "8K garden 29.19 MPix/s", zh: "8K garden 29.19 MPix/s" } },
        { label: { en: "4DGS × MJX Dynamic Push (125.6k LEGO splats)", zh: "4DGS × MJX 动态推挤 (12.56 万高斯)" }, val: 5.32, unit: "FPS @ 1080p", pct: 14, extra: { en: "1.30 FPS @ 4K (+16.4 cm push)", zh: "4K 1.30 FPS (+16.4 cm)" } },
        { label: { en: "Single-Host 300,000,000 Gaussians @ 4K (4c)", zh: "单机 4 芯 300,000,000 高斯 @ 4K" }, val: 301.87, unit: "GB HBM", pct: 80, extra: { en: "0.25 FPS · 1,171,875:1 cull", zh: "0.25 FPS · 剔除比 1,171,875:1" } }
      ]
    },
    cinema: {
      title: {
        en: "Disney Moana OpenUSD v2.1 (22.30B Tris), Cloth & Blender Studio",
        zh: "迪士尼 Moana OpenUSD (223 亿面)、可变形布料与 Blender Studio"
      },
      note: {
        en: "Compiled from official OpenUSD and .blend files into Wide-BVH-64 packs with AgX tonemapping.",
        zh: "直接由官方 .usd 与 .blend 文件编译为 Wide-BVH-64，采用 AgX 色调映射。"
      },
      rows: [
        { label: { en: "BMW27 Clearcoat (Orbit PSNR)", zh: "BMW27 清漆跑车 (环绕 PSNR)" }, val: 37.65, unit: "dB PSNR", pct: 100, extra: { en: "0.9813 SSIM · −0.012% lum", zh: "SSIM 0.9813 · 亮度差 −0.012%" } },
        { label: { en: "Monster Under the Bed SSS 1024² (Orbit)", zh: "床下怪兽 SSS 1024² (环绕 PSNR)" }, val: 36.98, unit: "dB PSNR", pct: 98, extra: { en: "35.34 dB hero · 0.121 mm Z-MAE", zh: "主视角 35.34 dB · 深度差 0.121 mm" } },
        { label: { en: "Barbershop Interior 8.55M Tris (141 Tex)", zh: "理发店室内 855 万面 (141 张纹理)" }, val: 31.00, unit: "dB PSNR", pct: 82, extra: { en: "13.8 mm MedAE · 4K 1.16 img/s", zh: "中位误差 13.8 mm · 4K 1.16 img/s" } },
        { label: { en: "Junkshop / Lone Monk / Fishy Cat (Orbit)", zh: "Junkshop / Lone Monk / Fishy Cat" }, val: 30.36, unit: "dB PSNR", pct: 80, extra: { en: "28.83 Monk / 28.80 Fishy Cat", zh: "Monk 28.83 / Fishy Cat 28.80 dB" } },
        { label: { en: "Barcelona Pavilion (54.91M Unique Tris)", zh: "巴塞罗那展馆 (5,491 万唯一面)" }, val: 27.45, unit: "dB PSNR", pct: 73, extra: { en: "15.94 mm Z-MAE · 4K 1.11 img/s", zh: "深度误差 15.94 mm · 4K 1.11 img/s" } },
        { label: { en: "Deformable Cloth BVH Refit (32,768 tris)", zh: "可变形布料 BVH Refit (3.28 万面)" }, val: 973.3, unit: "FPS (64²)", pct: 88, extra: { en: "0.0 m MAE · 20.39 FPS @ 1024²", zh: "0.0 m 误差 · 1024² 20.39 FPS" } },
        { label: { en: "Disney Moana OpenUSD (22.30B Tris, 4K)", zh: "迪士尼 Moana OpenUSD (223 亿面, 4K)" }, val: 5130, unit: "ms / frame", pct: 60, extra: { en: "8K 17.24 s · Underwater 8.72 s", zh: "8K 17.24 s · 水下 8.72 s" } }
      ]
    },
    dlss: {
      title: {
        en: "TPU-DLSS 3.5, 4K MC Denoiser & Static G-Buffer Relighting (4-Chip MXU)",
        zh: "TPU-DLSS 3.5、4K 路径追踪降噪与静态 G-Buffer 重打光（4 芯 MXU）"
      },
      note: {
        en: "Exact 4×4 bilinear reprojection and BF16/INT8 MXU inference at 1080p and 4K.",
        zh: "基于 4×4 双线性重投影与 BF16/INT8 MXU 推理。"
      },
      rows: [
        { label: { en: "Static G-Buffer Relight (4c 1080p BF16)", zh: "静态 G-Buffer 重打光 (1080p BF16)" }, val: 307.4, unit: "FPS", pct: 100, extra: { en: "20.28 dB · 0 raytrace ops", zh: "20.28 dB · 0 次光追" } },
        { label: { en: "4K BF16 MXU MC Denoiser (4c 3840×2160)", zh: "4K BF16 MXU 蒙特卡洛降噪器 (4 芯)" }, val: 87.8, unit: "FPS @ 4K", pct: 35, extra: { en: "11.39 ms · +15.22 dB (1-spp)", zh: "11.39 ms · +15.22 dB (1-spp)" } },
        { label: { en: "Static Relight 4K BF16 (vs. 37.2 FP32)", zh: "4K BF16 重打光 (对比 FP32 37.2)" }, val: 78.6, unit: "FPS @ 4K", pct: 31, extra: { en: "2.11× FP32 · INT8 78.1 FPS", zh: "2.11× FP32 · INT8 78.1 FPS" } },
        { label: { en: "TPU-DLSS 3.5 4K (from 1080p 1-spp, 4c)", zh: "TPU-DLSS 3.5 4K 超分 (1080p → 4K, 4 芯)" }, val: 58.9, unit: "FPS @ 4K", pct: 25, extra: { en: "16.97 ms · 3.91× E2E speedup", zh: "16.97 ms · 端到端 3.91×" } }
      ]
    },
    fx: {
      title: {
        en: "Monte Carlo GI, ReSTIR DI (1,024 Lights), Thin-Lens Bokeh & Physical FX",
        zh: "蒙特卡洛全局光、ReSTIR DI（1,024 光源）、薄透镜散景与波动光学"
      },
      note: {
        en: "Ray/path transport and wave optics compiled in XLA with zero host callbacks.",
        zh: "纯路径传输与波动光学，零主机回调。"
      },
      rows: [
        { label: { en: "4K 16-spp f/16 Thin-Lens Bokeh (4c)", zh: "4K 16-spp f/16 薄透镜散景 (4 芯)" }, val: 18.28, unit: "FPS @ 4K", pct: 100, extra: { en: "54.7 ms · 32-spp f/1.4: 9.20 FPS", zh: "54.7 ms · 32-spp f/1.4 9.20 FPS" } },
        { label: { en: "3-Bounce 8K Path Tracer (4c)", zh: "3 次反弹 8K 路径追踪 (4 芯)" }, val: 218.9, unit: "spm @ 8K", pct: 68, extra: { en: "726.3 MRays/s · host_cb=0", zh: "726.3 MRays/s · 零回调" } },
        { label: { en: "1-Bounce / 3-Bounce GI (512², 1c)", zh: "单芯 512² 1-bounce / 3-bounce 全局光" }, val: 3121, unit: "spm @ 512²", pct: 85, extra: { en: "835 spm 3-bounce (64 spp)", zh: "3-bounce 835 spm (64 spp)" } },
        { label: { en: "TPU-ReSTIR DI 1,024-Light Courtyard (720p, 4c)", zh: "TPU-ReSTIR DI 1,024 光源庭院 (720p)" }, val: 21.89, unit: "dB PSNR", pct: 60, extra: { en: "+11.61 dB · 7.43× HDR VarRed", zh: "+11.61 dB · HDR 方差降 7.43×" } },
        { label: { en: "Airy Thin-Film (8-bin) + 12-Bounce Mirrors (4c)", zh: "8 波段 Airy 薄膜 + 12 次反射 (4 芯)" }, val: 12, unit: "bounces", pct: 50, extra: { en: "128 spp · single XLA while_loop", zh: "128 spp · 单条 XLA while_loop" } }
      ]
    }
  },

  ledger: [
    { cat: "robotics", name: "V3 Fused MJX+Render E2E", scale: "4c, 64×64, B=8192", speed: "266,209 FPS (921k equiv)", acc: "depth_mae = 3.35e-10 m", file: "v3_w0_wave2_100k_fps.json" },
    { cat: "robotics", name: "Zero-Copy Vision PPO (Cartpole/Panda/Humanoid)", scale: "4c, 64×64, B=1024–4096", speed: "656.4k / 211.6k / 292.0k env/s", acc: "Cartpole eval 94.2% success", file: "v3_w0_wave4_rl_sdk.json" },
    { cat: "robotics", name: "Diff Physics + PBR Visual Servoing", scale: "1c, 12-step MJX, 7-DOF", speed: "27.87 grad-steps/s (8.61s)", acc: "36.08 dB · EE 16.81 → 1.63 cm", file: "v3_w0_taskB.json" },
    { cat: "robotics", name: "MuJoCo Menagerie Multi-Mesh Wide-BVH-64", scale: "4c, Aero/Panda/G1/Go2", speed: "4,284 / 3,131 / 2,546 / 1,863 FPS", acc: "host_callbacks=0, gather_ops=0", file: "v3_w0_taskA.json" },
    { cat: "robotics", name: "Isaac Replicator Bimanual 3-Cam DR (72-Geom Proxy)", scale: "4c, 64×64, 5-modality DR", speed: "41,286 env-FPS (123,858 cam-FPS)", acc: "+0.32% DR overhead", file: "v3_w1_wave3_replicator.json" },
    { cat: "robotics", name: "1M Factory Frames + Sim-to-VLA + GelSight", scale: "4c, G=2048, ViT-Tiny 1.02M", speed: "1M/142.6s · VLA 7,143 · Tactile 270.6k/s", acc: "Loss 0.2378 → 0.0332 (−1.84% VLA)", file: "v3_w1_wave4_vla_tactile_factory.json" },
    { cat: "robotics", name: "Autonomous 8×1080p + 2×128×2048 LiDAR Rig", scale: "4c, B=16 fused XLA graph", speed: "8.35 env-FPS · 66.8 cam · 142.9 MRays/s", acc: "Dual-XYZ MAE = 3.13e-8 m", file: "v3_w6_wave5_surround_bokeh.json" },
    { cat: "film", name: "Disney Moana OpenUSD v2.1 (4K/8K)", scale: "4c, 22.30B tris, 4.65 GiB", speed: "4K 5.13 s · 8K 17.24 s", acc: "0 host callbacks, 0 gathers", file: "v3_w2_wave5_moana_8k_mjx.json" },
    { cat: "film", name: "Disney Moana Sunset & Underwater Reef", scale: "4c, 22.30B tris, 4K", speed: "Sunset 5.60 s · Reef 8.72 s", acc: "16-step HG Volumetrics + Caustics", file: "v3_w2_wave6_moana_sunset_reef.json" },
    { cat: "film", name: "Deformable Cloth BVH Refit", scale: "1c, 32,768 dynamic tris", speed: "973.3 FPS (64²) · 20.39 FPS (1024²)", acc: "0.0 m Z-diff vs. CPU BVH rebuild", file: "v3_w2_deformable_cloth.json" },
    { cat: "film", name: "Blender BMW27 & Barcelona Pavilion (54.9M)", scale: "4c, Cycles Graph → AgX", speed: "4K 1.11 img/s (Barcelona)", acc: "BMW27 37.65 dB (0.9813 SSIM)", file: "v3_w5_wave5_bmw_barcelona.json" },
    { cat: "film", name: "Blender Monster SSS (1024²) & Fishy Cat", scale: "4c, 1.60M / 907k tris", speed: "10.07 img/s (1024²) · 1.72 4K", acc: "Monster 36.98 dB · 0.121 mm Z-MAE", file: "v3_w5_wave6_studio_double.json" },
    { cat: "film", name: "Blender Barbershop Interior (141 Textures)", scale: "4c, 8.55M tris, 249 mat", speed: "4K 1.16 img/s", acc: "31.00 dB orbit · 13.8 mm MedAE", file: "v3_w7_barbershop_cinema.json" },
    { cat: "gs3d", name: "Native TPU 3DGS Rasterizer (gs3d_v3)", scale: "4c, 64×64, gather_ops=0", speed: "142,008 FPS (30.1× on 1c)", acc: "gather_ops = 0 in XLA HLO", file: "v3_w3_gs3d_v3.json" },
    { cat: "gs3d", name: "300M Gaussians in 4c HBM + 4DGS×MJX Push", scale: "4c, 301.87 GB / 380 GB HBM", speed: "4K 0.25 FPS (300M) · 4DGS 5.32 FPS", acc: "1,171,875:1 cull · +16.43 cm push", file: "v3_w3_wave6_4dgs_300m.json" },
    { cat: "gs3d", name: "Mip-NeRF 360 garden 8K & 32-View Grad", scale: "4c, 5.83M SH3 / 50k train", speed: "8K 0.88 FPS (1.14s) · 23.4 steps/s", acc: "20.28 → 31.31 dB peak in 17.1 s", file: "v3_w3_wave7_8k_and_gradtrain.json" },
    { cat: "neural", name: "TPU-DLSS 3.5 (1080p 1-spp → 4K)", scale: "4c BF16 MXU, 4×4 exact", speed: "58.93 FPS @ 4K (16.97 ms)", acc: "3.91× E2E speedup · 7.01× flicker cut", file: "v3_w4_wave4_tpu_dlss_4k.json" },
    { cat: "neural", name: "4K MC AI Denoiser & Zero-RT Relight Pareto", scale: "4c FP32 / BF16 / INT8 W8A8", speed: "87.78 FPS Denoise · 78.60 FPS Relight 4K", acc: "BF16 20.276 dB (2.11×) · INT8 −0.047 dB", file: "v3_w4_wave5_relight_quant.json" },
    { cat: "neural", name: "TPU-ReSTIR DI (1,024 Lights) + Airy/Mirrors", scale: "4c, 720p ReSTIR / 12-bounce", speed: "12-bounce while_loop (128 spp)", acc: "ReSTIR 21.89 dB (+11.61 dB, 7.43× VarRed)", file: "v3_w7_wave5_restir_cinema.json" },
    { cat: "neural", name: "Pure 3-Bounce MC Path Tracing (Classroom)", scale: "4c, 606k tris, 360×640, 16 spp", speed: "137.9 spm (39.5 spm 1c)", acc: "~100× slower than H100 (14,106 spm) / RTX 5090", file: "v3_w7_opendata_pathtracer.json" },
    { cat: "neural", name: "Pure 4-Bounce MC Path Tracing (Lone Monk)", scale: "4c, 5.61M tris, 504×896, 16 spp", speed: "25.7 spm (37.3 s/frame)", acc: "host_callbacks=0, gather_ops=0", file: "v3_w7_cinema_pt.json" },
    { cat: "neural", name: "4-Chip Pod Capstone Dry-Run", scale: "4c (383 GB HBM, 5 suites)", speed: "2.15B tris · 8.25B rays/s LiDAR · 156k 3DGS", acc: "8K 3-bounce 218.9 spm · 0 host_cb", file: "v3_w6_pod_capstone_dryrun4c.json" },
    { cat: "neural", name: "32-Chip TPU v5p-64 Pod Capstone (8 Hosts)", scale: "32c (3.064 TB HBM, 395.1 s)", speed: "411k E2E (64²) · 952k 3DGS · 63.88B LiDAR · 1,650 spm 8K", acc: "17.18B unique tris · 1.062B splats · 0 CB", file: "v3_pod_v5p64_capstone.json" }
  ],

  copy: {
    en: {
      pageTitle: "TPU-RTX — Native Ray Tracing & Physical AI Rendering on Google TPU | Feiyang Liu",
      themeNight: "Dark",
      themeDay: "Light",
      nav: {
        home: "← Home",
        c1: "Architecture", c2: "Adapters", c3: "Results",
        c4: "Scaling", c5: "Robotics", c6: "Appendix"
      },
      hero: {
        meta: "Google Cloud TPU v5p (1–32 chips) · host_callbacks = 0 · XLA gather_ops = 0",
        by: "By",
        license: "Apache-2.0",
        title: "TPU-RTX: Native Ray Tracing and Physical AI Rendering on Google TPU",
        lead: "A zero-copy renderer on Google Cloud TPU v5p covering 64×64 analytic ray casting (for Vision RL), Wide-BVH-64 triangle-mesh ray/path tracing, chunked-VMEM 3DGS, and BF16 MXU neural relighting in one XLA graph — scaling from 1 chip to 32 chips (3.064 TB HBM).",
        ctaStart: "Rendered Results",
        ctaGallery: "Software Adapters",
        t0i: "01 · 4K VIDEO",
        t0t: "4DGS × MJX Panda Pushing LEGO Dozer",
        t1i: "02 · OPENUSD × MJX",
        t1t: "MJX Robots on Moana Beach (22.3B Tris)",
        t2i: "03 · 3DGS × MJX",
        t2t: "MJX Robots in 10M Bistro (4K)",
        t3i: "04 · CYCLES PARITY",
        t3t: "Barcelona Pavilion (54.91M Tris, 4K)",
        stackTitle: "System Stack Inside One XLA Graph",
        stackSub: "TPU v5p silicon, three zero-copy core kernels, eight adapters, and benchmark suites."
      },
      kpis: [
        ["MJX + Ray Casting (64×64)", "411,023 env-FPS", "32c pod (B=131k, 64×64 analytic ray cast + 1 shadow); 266k env-FPS on 4c"],
        ["Mesh Scale (Wide-BVH-64)", "22.3B / 17.2B Tris", "Moana OpenUSD (4.65 GiB HBM, 5.13s 4K) & 32c unique tris (1.18 TB)"],
        ["3DGS & Pod Capacity", "952k FPS / 1.06B", "952,248 FPS (128², 32c); 1.062B splats over ICI (32c)"],
        ["LiDAR & Pod HBM", "63.9B/s · 3.06 TB", "32c 128×2048 LiDAR (243.7k env-FPS); 3.064 TB total HBM"]
      ],
      c1: {
        num: "01",
        rail: "Architecture",
        title: "GPU vs. TPU Architecture & Tradeoffs",
        lead: "A GPU (32-thread SIMT warps, hardware RT cores, L1/L2 caches) and a Google Cloud TPU v5p (128×128 systolic MXU at 459 TFLOP/s BF16, 64 MiB software-managed VMEM, 95.74 GiB HBM) favor different memory patterns. Pointer-chasing binary BVHs stall on TPU HBM gather latency; packing a 64-ary Wide-BVH into VMEM avoids gathers and keeps physics, rendering, and gradients in the same XLA graph.",
        gvtTitle: "SIMT RTX GPU vs. Systolic TPU v5p Pipeline",
        gvtSub: "How CUDA-style pointer chasing stalls on TPU HBM, and how VMEM 64-ary Wide-BVH avoids gathers.",
        gvtRows: [
          ["1. Dynamic Branching & RT Cores", "<span class='badge fail'>Weakness</span> No hardware RT cores; 128-lane VPU requires regular, branchless masking.", "<span class='badge ok'>Strength</span> Hardware RT cores and 32-thread SIMT warps handle incoherent multi-bounce branching."],
          ["2. Random Memory Gather / Scatter", "<span class='badge fail'>Weakness</span> 166 FLOP/B ridge point; uncoalesced HBM gathers or tile atomics stall throughput.", "<span class='badge ok'>Strength</span> Hardware L1/L2 caches and fast shared-memory atomics absorb irregular pointer chasing."],
          ["3. VMEM & HBM Capacity", "<span class='badge ok'>Strength</span> 95.74 GiB HBM/chip (3.064 TB / 32c) holds 1.062B splats or 22.30B-tri Moana without PCIe paging.", "<span class='badge fail'>Weakness</span> Per-GPU VRAM (24–80 GB) limits large 3DGS/OpenUSD + RL batch concurrency on one card."],
          ["4. Physics + Render + RL/VLA Coupling", "<span class='badge ok'>Strength</span> mjx.step, raytrace, GelSight, LiDAR, PPO, and ViT-Tiny share one XLA graph (411k FPS 32c, −1.84% VLA overhead).", "<span class='badge fail'>Weakness</span> Often crosses Warp / OptiX / Isaac / PyTorch bridges or copies buffers between engines."],
          ["5. AI Denoising, DLSS & Relighting", "<span class='badge ok'>Strength</span> 459 TFLOP/s BF16 MXUs run directly on HBM G-buffers: 87.8 FPS 4K Denoise, 58.9 FPS 4K DLSS, 78.6 FPS 4K Relight.", "<span class='badge ok'>Strength</span> Tensor Cores and mature DLSS 3.5 / OptiX OIDN ecosystem work out of the box."],
          ["6. Startup Latency vs. Viewport", "<span class='badge fail'>Weakness</span> XLA AOT pays 4–130 s upfront compilation; suited to batch training and renders rather than live CAD.", "<span class='badge ok'>Strength</span> Sub-second CUDA responsiveness and interactive DCC tooling (Omniverse, Blender, Unreal)."]
        ]
      },
      c2: {
        num: "02",
        rail: "Adapters",
        title: "Software Adapters & Benchmark Coverage",
        lead: "To keep existing scenes and training scripts intact, standard simulator APIs, scene loaders, and rendering interfaces (MuJoCo/MJX, Isaac Replicator, Blender Cycles, OpenUSD, OptiX, gsplat, DLSS 3.5, ReSTIR) are implemented as XLA / Pallas Mosaic adapters under tpu_mjx_render/adapters/.",
        sdkBar: "Quickstart · tpu_rtx",
        ecoTitle: "Adapters (tpu_mjx_render/adapters/)",
        ecoSub: "Click any module badge to view its XLA / Pallas Mosaic source on GitHub.",
        adapters: [
          ["MuJoCo / MJX & Menagerie", "mjx_universal.py", "Compiles unmodified MjModel, MJCF XML, or Menagerie multi-mesh scenes into Wide-BVH-64 + analytic primitives, with jax.grad differentiable servoing.", "266k FPS (4c) / 411k FPS (32c) · Menagerie 1.9k–4.3k FPS"],
          ["NVIDIA Isaac Sim & Replicator", "isaac_replicator.py", "Implements TiledCamera (RGB/Depth/Normal/Seg/Flow), rep.randomizer.* XLA domain randomization, 128×2048 LiDAR, and GelSight tactile kernels in one graph.", "Bimanual 72-Geom Proxy 41.3k env / 123.9k cam-FPS (64²) · 32c LiDAR 63.88B rays/s"],
          ["Blender 4.x / Cycles .blend", "blend_compiler.py", "Walks Cycles Shader Graphs (Principled / Glass / Glossy / SSS) and Depsgraph modifiers from .blend files directly into TPU ScenePack + AgX.", "BMW27 37.65 dB · Monster 36.98 dB · Barbershop 31.00 dB"],
          ["Pixar / Disney OpenUSD", "openusd_loader.py", "Loads .usd / .usda / .usdc / .usdz with UsdGeom.Mesh, PointInstancer, and BasisCurves into a 2-level Wide-TLAS-64 on TPU.", "Disney Moana 22.30B tris in 4.65 GiB · 4K 5.13 s / 8K 17.24 s"],
          ["NVIDIA OptiX Python API", "tpu_optix.py", "Provides OptixDeviceContext, accelBuild(GAS/IAS), ShaderBindingTable (raygen/miss/closesthit/anyhit), and cloth BVH refit.", "Cloth Refit 973.3 FPS (0.0 m error) · 17.18B unique tris (32c)"],
          ["gsplat 3DGS / 4DGS Engine", "tpu_gsplat.py", "Chunked-VMEM EWA rasterizer with 32-view jax.grad training and SE(3) dynamic 4DGS without dynamic HBM gathers.", "142k (4c) / 952k FPS (32c) · 1.062B splats (32c) · 29.2 MPix/s 8K"],
          ["NVIDIA DLSS 3.5 & Denoiser", "tpu_dlss.py", "4×4 motion-vector reprojection, YCoCg history clamp, BF16 MXU 2× super-resolution, 4K Monte Carlo denoiser, and static G-buffer relighting.", "TPU-DLSS 3.5 58.9 FPS @ 4K · Denoiser 87.8 FPS · Relight 78.6 FPS"],
          ["SIGGRAPH ReSTIR DI", "tpu_restir.py", "Streaming M=32 Resampled Importance Sampling (RIS) and spatiotemporal reservoir reuse across 1,024 dynamic lights in HBM.", "1,024-Light Courtyard 21.89 dB (+11.61 dB, 7.43× HDR VarRed)"]
        ],
        bmkTitle: "Benchmark Coverage",
        bmkSub: "Distinguishing measured TPU v5p suites from API-compatible drop-in targets.",
        benchSupportRows: [
          ["<strong>Bimanual Tabletop Proxy</strong> (not official SAPIEN RoboTwin)", "<code>isaac_replicator</code> + <code>mjx_universal</code>", "<span class='badge ok'>Measured</span>", "64×64 analytic ray casting (72-geom MJX proxy, <code>fast_dr</code>, 1 hard shadow): <strong>41,286 env-FPS</strong> (123,858 cam-FPS across 3 cams, +0.32% DR overhead)."],
          ["<strong>RoboWild</strong> (3DGS / 4DGS × MJX)", "<code>tpu_gsplat</code> + <code>mjx_universal</code>", "<span class='badge ok'>Measured</span>", "Franka Panda pushing 125.6k LEGO Dozer splats in Mip-NeRF kitchen (+16.43 cm, 5.32 FPS 1080p / 1.30 FPS 4K)."],
          ["<strong>MuJoCo Menagerie</strong> (DeepMind)", "<code>mjx_universal</code>", "<span class='badge ok'>Measured</span>", "Unmodified MJCFs (Wide-BVH-64 meshes, 64×64, 4c): Aero Hand 4,284 FPS, Panda 3,131, Unitree G1 2,546, Go2 1,863."],
          ["<strong>Factory Sim-to-VLA + GelSight</strong>", "<code>isaac_replicator</code> + <code>tactile_kernel</code>", "<span class='badge ok'>Measured</span>", "1M frames in 142.6 s, ViT-Tiny VLA 7,143 FPS (−1.84% overhead), 4-sensor GelSight 270,625/s."],
          ["<strong>Vision RL</strong> (Cartpole / Panda / Humanoid)", "<code>mjx_universal</code> + <code>shard_map</code>", "<span class='badge ok'>Measured</span>", "In-HBM PPO (64×64 analytic ray cast): Cartpole 656.4k/s (94.2%), Panda 211.6k/s (411k 32c E2E), Humanoid 292.0k/s."],
          ["<strong>Surround-View + 128-Beam LiDAR</strong>", "<code>isaac_replicator</code> + <code>tpu_optix</code>", "<span class='badge ok'>Measured</span>", "8×1080p + 2×128×2048 rig (66.8 cam-FPS, 3.13e-8 m XYZ) & 32c batch LiDAR (63.88B rays/s)."],
          ["<strong>Blender Open Data & Studio</strong> (8 Scenes)", "<code>blend_compiler</code>", "<span class='badge ok'>Measured</span>", "Wide-BVH-64 G-buffer + neural relighting (IrradianceNRC3S): BMW27 37.65 dB, Monster 36.98 dB, Barbershop 31.00 dB, Barcelona 54.91M. Pure 3-bounce MC PT on Classroom (360×640): 137.9 spm (4c)."],
          ["<strong>Disney Moana OpenUSD + Mip-NeRF 360 & Bistro</strong>", "<code>openusd_loader</code> + <code>tpu_gsplat</code>", "<span class='badge ok'>Measured</span>", "Moana 22.30B tris (Daylight/Sunset/8K/MJX), 4× Mip-NeRF 360 4K (8K garden 29.19 MPix/s), 10M Bistro × MJX."],
          ["<strong>RoboDojo / MuJoCo Playground / ALOHA / ManiSkill</strong>", "<code>mjx_universal</code> + <code>openusd_loader</code> + <code>isaac_replicator</code>", "<span class='badge cyan'>Compatible</span>", "Standard MJCF XML, OpenUSD .usd, and rep.randomizer APIs compile via <code>tpu_rtx.compile(...)</code> (benchmark runs not yet recorded in out/metrics/)."]
        ]
      },
      c3: {
        num: "03",
        rail: "Results",
        title: "Rendered Results & Visual Comparisons",
        lead: "11 real-time rendered TPU videos (3DGS/4DGS orbits, 4K f/1.4 thin-lens focus pulls, PBD cloth BVH refit, and static G-buffer relighting), three interactive comparison sliders against Blender Cycles and Monte Carlo baselines, and 8 high-resolution 4K/8K still frames.",
        stillsTitle: "4K / 8K OpenUSD, 3DGS × MJX & Spectral Optics Stills (Click Frame to Inspect)"
      },
      c4: {
        num: "04",
        rail: "Scaling",
        title: "Optimization Trajectory & 32-Chip Pod Scaling",
        lead: "Measurements from 1 chip to an 8-host, 32-chip TPU v5p-64 pod (3.064 TB HBM, full capstone suite completed in 395.07 s). The plots below include negative and flat runs alongside the 64 MiB VMEM spill cliff.",
      },
      c5: {
        num: "05",
        rail: "Robotics",
        title: "In-HBM Training: Differentiable Physics, Vision PPO & Robots",
        lead: "Physics steps, sensors, losses, and gradients execute inside TPU HBM without host callbacks. Below are four training and sensor telemetry plots, six robot rollout videos, and two high-resolution Menagerie stills.",
      },
      c6: {
        num: "06",
        rail: "Appendix",
        title: "Post-Mortems, Limitations & Telemetry Ledger",
        lead: "Four engineering post-mortems, two rejected renders from earlier pipeline bugs, a workload comparison referencing wenhaochai/rtx-h100, and 23 verifiable metric JSON files.",
        honestHead: "Scope & Hardware Boundaries",
        authorRole: "Author",
        homeBtn: "Homepage ↗",
        bibBar: "BibTeX · Apache-2.0",
        foldBench: "Benchmark Summary Breakdown (5 Categories)",
        foldPlates: "Full Still Image Index (26 Plates)",
        pmCards: [
          ["Resolved", "Checkerboard Gather Bottleneck", "1. Hidden Dynamic Gather in Checkerboard Shading (151 MB Gather)", "Profiling showed >90% of early Pallas frame time (286.5 ms) was spent not in BVH traversal, but in an XLA dynamic gather geom_xmat[b_idx, safe_gid] triggered by a checkerboard floor.", "Replacing the dynamic lookup with static iteration over checkerboard IDs cut shading time 4.4× (286.5 → 64.9 ms), reaching 12,843 FPS (1c) and 50,131 FPS (4c) with gather_ops = 0."],
          ["Negative Result", "3DGS Pallas vs. XLA Baseline", "2. First Pallas 3DGS Kernel Lost 1.81× to Plain XLA", "Our initial MXU log-space Pallas 3DGS kernel (gs3d_pallas) ran at 658.6 FPS — slower than plain XLA jax_tile (1,193.2 FPS) because padded (BT, 64, 128) outputs inflated writes 16× across 65,536 small DMAs.", "We kept jax_tile as default and redesigned chunked VMEM EWA sorting (gs3d_v3), reaching 142,008 FPS (4c) and 952,248 FPS + 1.062B splats on 32 chips."],
          ["3 Failed Runs → Pass", "Neural Shader Gate Ablation", "3. Three Failed Stage-2 Neural Shader Runs", "A 1×1 pixel MLP failed soft shadows (27.80 dB); a narrow W32 U-Net mis-aligned gripper occlusion (10% mismatch); jnp.clip inside the loss saturated gradients on step 1 (15.20 dB).", "Adding reflect(V, N) + Fresnel N·V, dual 1×1 BRDF skip heads, unclipped loss with global norm clipping, and tight-grasp augmentation passed 8/8 gates at 38.35 dB / 0.9889 SSIM."],
          ["Multi-Host Fix", "32-Chip Pod (395.1 s)", "4. Cross-Host MJX Arrays & Device Lock Cleanup", "In 8-host (32-chip) distributed mode, mjx.put_model(m, impl='jax') with device=None created cross-host IFRT failures, and multiline SSH cleanup left /dev/vfio/3 locked.", "Fixing device=local_devs[0] and single-line PID cleanup completed the 32-chip capstone in 395.07 s: 411k E2E FPS, 952k 3DGS, 1.062B splats, 63.88B LiDAR rays/s, 17.18B unique tris, and 1,650 spm @ 8K."]
        ],
        ablationRows: [
          ["Phase-0 Gate Threshold", "≥ 30.0 dB", "≥ 28.0 dB", "≤ 0.010", "<span class='badge cyan'>All 8 Required</span>"],
          ["Stage 1 Analytic Direct Baseline", "13.83 dB", "—", "—", "Hard shadows, no indirect GI"],
          ["M1 Pixel MLP (1×1, 150 ep)", "27.80 dB", "23.52 dB", "0.0500 (7/140)", "<span class='badge fail'>FAIL</span> No spatial receptive field"],
          ["M2 Spatial U-Net (Narrow W32)", "35.58 dB", "27.79 dB", "0.1000 (14/140)", "<span class='badge fail'>FAIL</span> Contact occlusion blur"],
          ["M2 Spatial U-Net + jnp.clip Loss", "15.20 dB", "—", "—", "<span class='badge fail'>FAIL</span> Step-1 gradient saturation"],
          ["M2 Spatial U-Net (24-ch BRDF, Final)", "<strong>38.35 dB</strong>", "<strong>30.31 dB</strong>", "<strong>0.00714 (1/140)</strong>", "<span class='badge ok'>PASS (8/8)</span> SSIM 0.9889, Edge 0.157 px"]
        ],
        rejected: [
          {
            id: "rejected_openusd_clay",
            img: "./assets/postmortem/rejected_openusd_clay.webp",
            banner: "Rejected · Early Untextured OpenUSD Stage",
            title: "Rejected Output A: Missing Ptex & Surface Binding (v3_w2_openusd_4k)",
            desc: "Before Disney OpenUSD Ptex and BSDF material binding was wired up, diffuse shaders collapsed foliage and ocean reflections into flat clay. Replaced by the updated Daylight and Sunset passes."
          },
          {
            id: "rejected_garden_seams",
            img: "./assets/postmortem/rejected_garden_seams.webp",
            banner: "Rejected · 16×16 Tile Clipping Artifacts",
            title: "Rejected Output B: Early 32-View 3DGS Render (v3_w3_garden_32v_grad)",
            desc: "Local tile accumulation bounds clipped splat tails outside each 16×16 bin, causing grid seams and black borders. Image excluded; the fixed training pipeline reached 31.31 dB."
          }
        ],
        honest: "Every metric on this page — across 1-chip runs, 4-chip hosts (383 GiB HBM), and the 8-host 32-chip TPU v5p-64 pod (3.064 TB HBM, v3_pod_v5p64_capstone.json) — was measured directly on Google Cloud TPU v5p hardware without extrapolation. Note two important evaluation distinctions: (1) High-FPS Vision RL numbers (411k env-FPS 32c, 266k env-FPS 4c, and the 41.3k env-FPS / 123.9k cam-FPS 72-geom bimanual MJX proxy) use 64×64 analytic-primitive ray casting + 1 shadow ray, whereas Blender Studio parity (37.65 dB BMW27) uses Wide-BVH-64 G-buffers + neural relighting. On pure multi-bounce triangle-mesh MC path tracing, GPUs remain ~100× faster: Classroom (606k tris, 3-bounce, 360×640) runs at 137.9 spm on 4 TPU chips (Lone Monk 5.61M 4-bounce: 25.7 spm) vs. 14,106 spm on H100 exact or 19,202 spm on RTX 5090 (Chai et al., 2026). (2) XLA gather_ops = 0 refers to zero XLA gather() IR ops and zero per-ray HBM gathers; MJX analytic rendering and differentiable 3DGS are strictly zero-gather, 3DGS forward uses in-VMEM VPU take_along_axis, and Wide-BVH-64 issues tile-granular (8×16, 128-ray) 4 KB / 12 KB pltpu.async_copy block DMAs inside Pallas with geometry + normals packed inline. Suites without a recorded run JSON (RoboDojo, MuJoCo Playground, ALOHA, ManiSkill, official SAPIEN RoboTwin) are marked Compatible or Proxied rather than Measured.",
        authorBio: "Systems and graphics engineer working on compiler-native rendering, differentiable physics, and Physical AI workloads on ML accelerators.",
        ack: "Third-Party Assets & References: Walt Disney Animation Studios Moana Island Scene v2.1 (Non-Commercial License); Blender Open Data / Blender Studio scenes (BMW27, Barcelona Pavilion, Barbershop, Classroom, Junkshop, Lone Monk, Monster Under the Bed, Fishy Cat — CC0 / CC-BY); Mip-NeRF 360 dataset (Barron et al.); Google DeepMind mujoco_menagerie (Apache-2.0 / BSD); Chai et al. (2026) wenhaochai/rtx-h100 H100/RTX PRO 6000 Cycles benchmarks."
      },
      podStats: [
        ["Bench 1 & 2 · MJX + 3DGS (4c → 32c)", "411,023 FPS E2E | 952,248 FPS 3DGS", "7.97× pod scaling from 51.5k (4c) to 411.0k FPS (32c B=131k); 128² 3DGS reaches 952.2k FPS and 1.062B ICI splats at 1080p (3.41 s)."],
        ["Bench 3 · 128×2048 360° LiDAR (32c)", "243,676 env-FPS | 63.88B Rays/s", "B=16,384 parallel 128×2048 LiDAR scans in 67.2 ms across 8 hosts (B=32,768: 229,060 env-FPS / 60.05B rays/s, gather_ops = 0)."],
        ["Bench 4 · Sharded Unique Triangles (32c)", "17.18B Unique Tris (1.18 TB HBM)", "32-chip ICI jax.lax.pmin scales 8× over 4c (2.15B → 17.18B unique tris), rendering 4K in 4.46 s and 8K in 8.53 s."],
        ["Bench 5 · 8K 3-Bounce Path Tracing (32c)", "1,650.2 spm @ 8K (5.475 GRays/s)", "Unbiased 3-bounce Monte Carlo GI at 7680×4320 (33.18M px): 145.4 ms at 4 spp (6.88 FPS) and 37.5 ms at 1 spp (26.69 FPS, host_callbacks = 0)."]
      ],
      compRows: [
        ["Embodied Vision RL, VLA & Tactile", "Single XLA graph: 266k FPS (4c) / 411k FPS (32c), 1M factory frames in 142.6 s, 270.6k/s GelSight", "Static offline renderer (no RL loop)", "Mature CUDA Warp / Isaac ecosystem on RTX / L40S / H100"],
        ["Real-to-Sim 3DGS / 4DGS + Physics", "142k (4c) / 952k FPS (32c), 1.062B splats, 8K garden 29.19 MPix/s, 4DGS × MJX push", "Cycles mesh + NRC only", "Requires separate CUDA gsplat and USD / PhysX bridge"],
        ["End-to-End Diff Physics + Render", "36.08 dB / 1.63 cm EE error via jax.value_and_grad(mjx.step + PBR) at 27.9 grad-steps/s", "Non-differentiable offline path tracer", "Separate Warp diff-sim / Nvdiffrast pipeline"],
        ["Film Path Tracing & Cycles", "High HBM capacity: Moana (22.30B tris, 4.65 GiB), 17.18B unique tris (32c). Neural-relit Blender parity: BMW27 37.65 dB. Pure MC PT (Classroom 3-bounce 360×640): 137.9 spm (4c)", "Speed leader (wenhaochai/rtx-h100): Classroom 14,106 spm exact / 55,148 spm NRC-scatter (H100), 19,202 spm (RTX 5090), 78,297 spm RTX PRO 6000", "Interactive Omniverse / OptiX workstation viewport"],
        ["AI Relighting, Denoising & DLSS", "BF16/INT8 MXU: 4K Denoise 87.8 FPS, 4K DLSS 58.9 FPS, Relight 78.6 FPS 4K / 307.4 FPS 1080p", "NRC-scatter 40.4 img/s (32-spp, H100)", "Hardware Tensor Core DLSS 3.5 + Ray Reconstruction"]
      ],
      ui: {
        copy: "Copy", copied: "Copied", zoom4k: "Inspect ↗", loupe: "1:1 Pixel Loupe (L)", raw: "Open Original ↗",
        footerL: "TPU-RTX · Google Cloud TPU v5p (JAX + Pallas Mosaic)",
        searchPlaceholder: "Filter 23 experiments, scenes, JSON...",
        v3_head: "Rendered Video Results (30 fps)",
        v5_head: "Embodied Robotics & Differentiable Physics Rollouts (30 fps)",
        vid_all: "All (11)", vid_gs3d: "3DGS / 4DGS (6)", vid_optics: "Bokeh & Cloth (3)", vid_relight: "Relighting (2)",
        b_mjx: "Robotics & Embodied AI", b_gs3d: "3DGS / 4DGS / Pod", b_cinema: "Moana, Cloth & Blender", b_dlss: "TPU-DLSS 3.5 & Relight", b_fx: "Path Tracing & Optics",
        g_all: "All (26)", g_film: "Moana & Studio (10)", g_optics: "Optics (3)", g_gs3d: "3DGS / Bistro (6)", g_robotics: "Robotics (5)", g_rej: "Rejected (2)",
        th1: "Workload", th2: "TPU-RTX (Google TPU v5p)", th3: "GPU Cycles (wenhaochai/rtx-h100)", th4: "NVIDIA Isaac Sim / OptiX",
        gvt1: "Dimension", gvt2: "Google Cloud TPU v5p (TPU-RTX)", gvt3: "NVIDIA GPU (RTX / H100 / Isaac)",
        bs1: "Benchmark / Suite", bs2: "Adapter Stack", bs3: "Status", bs4: "Measured Result or Compatibility Scope",
        ab1: "Stage-2 Neural Shader Ablation", ab2: "PSNR (dB)", ab3: "ROI Contact PSNR", ab4: "Occ Mismatch", ab5: "Gate & Root Cause",
        ld_all: "All (23)", ld_rob: "Robotics", ld_film: "Film & Cloth", ld_gs: "3DGS / 4DGS", ld_nn: "Neural / Optics",
        lt1: "Experiment", lt2: "Config / Scale", lt3: "Throughput", lt4: "Accuracy / Parity", lt5: "JSON",
        ev_h: "Optimization Trajectory on TPU v5p (453 → 266,209 FPS; 32c: 411,023 FPS)", ev_s: "Chronological step-envelope including negative and flat runs.",
        gs_h: "3DGS Trajectory: Pallas v1 (659 FPS) → 142k (4c) → 952k FPS (32c Pod)", gs_s: "Replacing padded DMA writes with chunked VMEM EWA reaches 142,008 FPS (4c) and 952,248 FPS + 1.062B splats (32c).",
        vm_h: "64 MiB VMEM Spill Cliff at tile_size = 512 (−24%)", vm_s: "Measured throughput sweeping ray tile size from 64 to 512 on 1 TPU v5p chip (B = 1024).",
        mx_h: "FP32 vs. BF16 vs. INT8 W8A8 MXU Precision Pareto", mx_s: "BF16 gives 2.11× @ 4K (78.6 vs. 37.2 FPS) at identical 20.276 dB PSNR; INT8 QAT drops 0.047 dB.",
        orb_h: "Hero Camera vs. Held-Out Orbit Camera PSNR", orb_s: "Both hero-view and multi-angle held-out orbit PSNR across 7 Blender Studio scenes.",
        dp_h: "End-to-End jax.grad(mjx.step + PBR) Servoing (240 iters in 8.61 s)", dp_s: "RGB L2 loss optimizes 7-DOF torques from 17.55 dB → 36.08 dB while reducing end-effector error from 16.03 cm → 1.63 cm.",
        pp_h: "Closed-Loop Vision PPO Training in HBM", pp_s: "Cartpole (656.4k env-steps/s steady), PandaPickCube (173.5k/s), and Humanoid-21DOF (221.7k/s) trained end-to-end from rendered pixels.",
        g3_h: "32-View 3DGS Training: Mip-NeRF 360 garden (25.5 s)", g3_s: "4-chip jax.grad reaches 28.56 dB in 3.22 s, 30.30 dB in 7.50 s, and 31.31 dB peak at 23.42 steps/s.",
        vl_h: "1M VLA Frames (142.6 s), ViT-Tiny VLA & 8×1080p + LiDAR Rig", vl_s: "Measured data generation, online ViT-Tiny training, GelSight tactile simulation, and surround perception parity."
      }
    },

    zh: {
      pageTitle: "TPU-RTX — Google TPU 原生实时光线追踪与具身渲染 | Feiyang Liu",
      themeNight: "深色",
      themeDay: "浅色",
      nav: {
        home: "← 个人主页",
        c1: "架构", c2: "生态适配", c3: "渲染效果",
        c4: "性能扩展", c5: "具身训练", c6: "复盘与数据"
      },
      hero: {
        meta: "Google Cloud TPU v5p (1–32 芯) · host_callbacks = 0 · XLA gather_ops = 0",
        by: "作者",
        license: "Apache-2.0",
        title: "TPU-RTX：在 Google TPU 上实现原生光线追踪与具身渲染",
        lead: "基于 Google Cloud TPU v5p 的零拷贝渲染系统，涵盖 64×64 解析原语光线投射（用于 Vision RL）、Wide-BVH-64 三角网格光追与路径追踪、分块 VMEM 3DGS 与 BF16 MXU 神经重打光——统一编译进单张 XLA 计算图，从单芯扩展至 32 芯集群（3.064 TB HBM）。",
        ctaStart: "查看渲染效果",
        ctaGallery: "软件适配层",
        t0i: "01 · 4K 视频",
        t0t: "4DGS × MJX Panda 推挤乐高推土机",
        t1i: "02 · OPENUSD × MJX",
        t1t: "MJX 机器人奔跑于 Moana 沙滩 (223 亿面)",
        t2i: "03 · 3DGS × MJX",
        t2t: "MJX 机器人进入 1,000 万 Bistro (4K)",
        t3i: "04 · CYCLES 对齐",
        t3t: "巴塞罗那展馆 (5,491 万面, 4K)",
        stackTitle: "单张 XLA 计算图内的四层系统结构",
        stackSub: "包含 TPU v5p 硬件底座、3 个零拷贝核心内核、8 个接口适配层与对应基准测试。"
      },
      kpis: [
        ["MJX + 光线投射 (64×64)", "411,023 env-FPS", "32 芯集群 (B=131k，64×64 解析原语 + 1 阴影射线)；4 芯 266k env-FPS"],
        ["网格规模 (Wide-BVH-64)", "223 亿 / 172 亿面", "Moana OpenUSD (4.65 GiB HBM, 4K 5.13s) 与 32 芯唯一面 (1.18 TB)"],
        ["3DGS 吞吐与容量", "95.2 万 FPS / 10.6 亿", "32 芯 128² 达 952,248 FPS；ICI 分布式 10.62 亿高斯"],
        ["LiDAR 与集群显存", "639 亿/s · 3.06 TB", "32 芯 128×2048 LiDAR (243.7k env-FPS)；3.064 TB HBM"]
      ],
      c1: {
        num: "01",
        rail: "架构",
        title: "GPU 与 TPU 硬件架构及适用边界",
        lead: "GPU（32 线程 SIMT Warp、硬件 RT Core、L1/L2 缓存）与 Google Cloud TPU v5p（459 TFLOP/s BF16 128×128 脉动阵列 MXU、64 MiB 软件控制 VMEM、95.74 GiB HBM）面向不同的访存模式。沿用指针跳转式二叉 BVH 会在 TPU HBM Gather 延迟上严重阻塞；将 64 叉 Wide-BVH 布局对齐 VMEM 后，可消除动态 Gather，让物理、渲染与梯度反传驻留在同一张 XLA 计算图内。",
        gvtTitle: "SIMT RTX GPU 与 Google TPU v5p 脉动阵列执行流水线",
        gvtSub: "对比两者的访存层次、BVH 遍历路径以及与物理仿真/训练的耦合方式。",
        gvtRows: [
          ["1. 动态分支与硬件 RT Core", "<span class='badge fail'>短板</span> 无硬件 RT Core，128 通道 VPU 依赖规则无分支掩码。", "<span class='badge ok'>优势</span> 专用硬件 RT Core 与 32 线程 SIMT Warp 适合随机多反弹分歧。"],
          ["2. 随机内存 Gather / 原子操作", "<span class='badge fail'>短板</span> 计算脊点 166 FLOP/B，非合并 HBM Gather 或 Tile 原子写会导致吞吐骤降。", "<span class='badge ok'>优势</span> 硬件 L1/L2 缓存与片上原子写适合不规则指针跳转。"],
          ["3. VMEM 与 HBM 显存容量", "<span class='badge ok'>优势</span> 单芯 95.74 GiB HBM（32 芯 3.064 TB）可装入 10.62 亿高斯或 223 亿面 Moana。", "<span class='badge fail'>短板</span> 单卡显存（24–80 GB）会限制高并发 RL 或数亿级高斯场景。"],
          ["4. 物理 + 渲染 + RL/VLA 耦合", "<span class='badge ok'>优势</span> mjx.step、光追、GelSight、LiDAR、PPO 与 ViT-Tiny 共用单张 XLA 图（32 芯 411k FPS，VLA 仅 −1.84% 开销）。", "<span class='badge fail'>短板</span> 常需在 Warp / OptiX / Isaac / PyTorch 之间桥接或拷贝缓冲。"],
          ["5. AI 降噪、超分与重打光", "<span class='badge ok'>优势</span> 459 TFLOP/s BF16 MXU 直接读取 HBM G-Buffer：4K 降噪 87.8 FPS、4K DLSS 58.9 FPS、4K 重打光 78.6 FPS。", "<span class='badge ok'>优势</span> Tensor Core 与官方 DLSS 3.5 / OptiX OIDN 工具链成熟。"],
          ["6. 首次编译与交互式视口", "<span class='badge fail'>短板</span> XLA AOT 需 4–130 s 冷编译，适合预编译训练和批量渲染，不适合交互式建模视口。", "<span class='badge ok'>优势</span> 亚秒级响应与 Omniverse、Blender、Unreal 交互式编辑生态。"]
        ]
      },
      c2: {
        num: "02",
        rail: "生态适配",
        title: "软件接口适配层与基准覆盖",
        lead: "为复用现有仿真任务与三维资产格式，我们将主流接口（MuJoCo/MJX、Isaac Replicator、Blender Cycles、OpenUSD、OptiX、gsplat、DLSS 3.5、ReSTIR）重构为运行在 XLA 与 Pallas Mosaic 上的编译适配器，代码位于 tpu_mjx_render/adapters/。",
        sdkBar: "调用示例 · tpu_rtx",
        ecoTitle: "8 个接口适配模块 (tpu_mjx_render/adapters/)",
        ecoSub: "点击模块文件名可在 GitHub 查看对应 XLA / Pallas Mosaic 实现。",
        adapters: [
          ["MuJoCo / MJX 与 Menagerie", "mjx_universal.py", "编译标准 MjModel、MJCF XML 与 Menagerie 多网格模型至 Wide-BVH-64 与解析几何，支持穿透 mjx.step 的 jax.grad 视觉伺服。", "266k FPS (4 芯) / 411k FPS (32 芯) · Menagerie 1.9k–4.3k FPS"],
          ["NVIDIA Isaac Sim & Replicator", "isaac_replicator.py", "实现 TiledCamera（RGB/Depth/Normal/Seg/Flow）、rep.randomizer.* XLA 域随机化、128×2048 激光雷达与 GelSight 视触觉内核。", "72 刚体双臂代理 64² 实测 41.3k env / 123.9k cam-FPS · 32 芯 LiDAR 63.88B/s"],
          ["Blender 4.x / Cycles .blend", "blend_compiler.py", "解析 .blend 文件中的 Cycles 材质节点图（Principled/Glass/Glossy/SSS）与 Depsgraph 实例，编译为 TPU ScenePack 与 AgX 输出。", "BMW27 37.65 dB · Monster 36.98 dB · Barbershop 31.00 dB"],
          ["Pixar / Disney OpenUSD", "openusd_loader.py", "解析 .usd / .usda / .usdc / .usdz 中的 UsdGeom.Mesh、PointInstancer 与 BasisCurves，构建两级 Wide-TLAS-64。", "Moana 223 亿面占 4.65 GiB · 4K 5.13 s / 8K 17.24 s"],
          ["NVIDIA OptiX Python 接口", "tpu_optix.py", "实现 OptixDeviceContext、accelBuild(GAS/IAS)、ShaderBindingTable（raygen/miss/closesthit/anyhit）及动态布料 BVH 重拟合。", "布料 BVH Refit 973.3 FPS (0.0 m 误差) · 32 芯 171.8 亿唯一面"],
          ["gsplat 3DGS / 4DGS 引擎", "tpu_gsplat.py", "无动态 HBM Gather 的分块 VMEM EWA 高斯光栅化器，支持 32 视角 jax.grad 训练与 SE(3) 动态 4DGS 物理交互。", "14.2 万 (4 芯) / 95.2 万 FPS (32 芯) · 10.62 亿高斯 · 8K 实景"],
          ["NVIDIA DLSS 3.5 与降噪器", "tpu_dlss.py", "4×4 运动矢量重投影、YCoCg 历史钳位、BF16 MXU 2× 超分、4K 路径追踪降噪与静态 G-Buffer 零光追重打光。", "TPU-DLSS 3.5 4K 58.9 FPS · 降噪 87.8 FPS · 重打光 78.6 FPS"],
          ["SIGGRAPH ReSTIR DI", "tpu_restir.py", "在 HBM 内执行流式 M=32 RIS 与时空蓄水池复用，处理 1,024 盏动态光源场景。", "1,024 光源庭院 21.89 dB（+11.61 dB，HDR 方差降 7.43×）"]
        ],
        bmkTitle: "基准测试覆盖范围",
        bmkSub: "明确区分已完成 TPU v5p 实测的基准套件与仅完成接口兼容验证的目标套件。",
        benchSupportRows: [
          ["<strong>双臂桌面代理</strong>（非官方 SAPIEN RoboTwin）", "<code>isaac_replicator</code> + <code>mjx_universal</code>", "<span class='badge ok'>已实测</span>", "64×64 解析原语光线投射（72 解析刚体、<code>fast_dr</code>、1 条硬阴影射线）：<strong>41,286 env-FPS</strong>（3 相机合计 123,858 cam-FPS，DR 开销 +0.32%）。"],
          ["<strong>RoboWild</strong>（3DGS / 4DGS × MJX）", "<code>tpu_gsplat</code> + <code>mjx_universal</code>", "<span class='badge ok'>已实测</span>", "Mip-NeRF kitchen 中 Panda 机械臂推挤 12.56 万乐高推土机高斯（+16.43 cm，1080p 5.32 / 4K 1.30 FPS）。"],
          ["<strong>MuJoCo Menagerie</strong>（DeepMind）", "<code>mjx_universal</code>", "<span class='badge ok'>已实测</span>", "官方未修改 MJCF（Wide-BVH-64 三角网格，64×64，4 芯）：Aero Hand 4,284 FPS、Panda 3,131、宇树 G1 2,546、Go2 1,863。"],
          ["<strong>Sim-to-VLA + GelSight 视触觉</strong>", "<code>isaac_replicator</code> + <code>tactile_kernel</code>", "<span class='badge ok'>已实测</span>", "142.6 s 生成百万帧，ViT-Tiny 在线训练 7,143 FPS（−1.84% 开销），4 路 GelSight 270,625/s。"],
          ["<strong>Vision RL</strong>（Cartpole/Panda/Humanoid）", "<code>mjx_universal</code> + <code>shard_map</code>", "<span class='badge ok'>已实测</span>", "HBM 闭环 PPO（64×64 解析光线投射）：Cartpole 656.4k/s（94.2%）、Panda 211.6k/s（32 芯 411k E2E）、Humanoid 292.0k/s。"],
          ["<strong>8 路环视 + 双 128 线 LiDAR</strong>", "<code>isaac_replicator</code> + <code>tpu_optix</code>", "<span class='badge ok'>已实测</span>", "8×1080p + 2×128×2048 实测 66.8 cam-FPS（3.13e-8 m 误差）；32 芯批量 LiDAR 63.88B rays/s。"],
          ["<strong>Blender Open Data & Studio</strong>（8 场景）", "<code>blend_compiler</code>", "<span class='badge ok'>已实测</span>", "Wide-BVH-64 G-Buffer + 神经重打光（IrradianceNRC3S）：BMW27 37.65 dB、Monster 36.98 dB、Barbershop 31.00 dB、Barcelona 5,491 万面；Classroom 纯 3-bounce MC PT（360×640）：137.9 spm（4 芯）。"],
          ["<strong>Disney Moana OpenUSD + Mip-NeRF 360 & Bistro</strong>", "<code>openusd_loader</code> + <code>tpu_gsplat</code>", "<span class='badge ok'>已实测</span>", "Moana 223 亿面（晴天/日落/8K/MJX）、Mip-NeRF 360 4K（8K garden 29.19 MPix/s）、1,000 万 Bistro × MJX。"],
          ["<strong>RoboDojo / MuJoCo Playground / ALOHA / ManiSkill</strong>", "<code>mjx_universal</code> + <code>openusd_loader</code> + <code>isaac_replicator</code>", "<span class='badge cyan'>接口兼容</span>", "导出的 MJCF XML、OpenUSD .usd 与 <code>rep.randomizer</code> 接口可通过 <code>tpu_rtx.compile(...)</code> 编译（out/metrics/ 中暂无单独跑分记录）。"]
        ]
      },
      c3: {
        num: "03",
        rail: "渲染效果",
        title: "渲染视频与画质对比",
        lead: "包含 11 段 TPU v5p 实时渲染视频（3DGS/4DGS 环绕、4K f/1.4 薄透镜拉焦、可变形布料 BVH 重拟合与静态 G-Buffer 重打光），3 组交互式图像对比滑块（对照 Blender Cycles 参考 EXR 及光学/神经基线），以及 8 张 4K/8K 静态高分辨率样本。",
        stillsTitle: "4K / 8K OpenUSD、3DGS × MJX 与光谱光学静态样本（点击画面放大检视）"
      },
      c4: {
        num: "04",
        rail: "性能扩展",
        title: "性能优化轨迹与 32 芯集群扩展",
        lead: "记录从单芯优化到 8 机 32 芯 TPU v5p-64 集群（3.064 TB HBM，整套压测耗时 395.07 s）的实测数据。以下图表同时保留了负结果、持平尝试以及 64 MiB VMEM 溢出边界。",
      },
      c5: {
        num: "05",
        rail: "具身训练",
        title: "显存内训练：可微物理、Vision PPO 与机器人",
        lead: "物理仿真、多模态传感器、损失计算与反向传播均在 TPU HBM 内闭环运行。下方展示 4 组训练与传感器曲线、6 段机器人仿真视频，以及两款 Menagerie 静态机械臂/灵巧手渲染。",
      },
      c6: {
        num: "06",
        rail: "复盘与数据",
        title: "工程复盘、能力边界与溯源账本",
        lead: "汇总 4 个已定位并修复的性能与训练问题、2 个早期管线缺陷样本、引用 wenhaochai/rtx-h100 的跨硬件对照表，以及 23 份可下载验证的 JSON 指标记录。",
        honestHead: "实测口径与能力边界",
        authorRole: "作者",
        homeBtn: "个人主页 ↗",
        bibBar: "BibTeX 引用 · Apache-2.0",
        foldBench: "各模块基准测试分项汇总（5 类）",
        foldPlates: "全量 26 张静态图像索引",
        pmCards: [
          ["已修复", "棋盘格隐式 Gather 瓶颈", "1. 棋盘格地面触发 151 MB 隐式 Gather", "性能剖析显示早期 286.5 ms 帧耗时中超过 90% 并非发生在 BVH 遍历，而是棋盘地面触发的 XLA 动态 gather geom_xmat[b_idx, safe_gid]。", "改为静态 ID 迭代后着色耗时下降 4.4×（286.5 → 64.9 ms），单芯达 12,843 FPS，4 芯达 50,131 FPS（gather_ops = 0）。"],
          ["负结果记录", "3DGS 初版 Pallas 对比 XLA", "2. 初版 Pallas 3DGS 慢于纯 XLA 基线 1.81×", "首版 MXU 对数空间 Pallas 核（gs3d_pallas）仅 658.6 FPS，低于纯 XLA jax_tile（1,193.2 FPS）——因 (BT, 64, 128) 对齐填充使写出量膨胀 16× 且碎片化 DMA 过多。", "保留 jax_tile 作为基线，随后重新设计分块 VMEM EWA 排序（gs3d_v3），4 芯达 142,008 FPS，32 芯达 952,248 FPS 与 10.62 亿高斯。"],
          ["3 次失败 → 通过", "Stage-2 神经着色器消融", "3. Stage-2 神经着色器前三次消融失败原因", "1×1 像素 MLP 缺少空间感受野（27.80 dB）；窄通道 W32 U-Net 出现 10% 夹爪遮挡错位；Loss 中加入 jnp.clip 在第 1 步饱和梯度（15.20 dB）。", "加入 reflect(V, N) 与 Fresnel N·V、双 1×1 BRDF 跳连、移除 clip 并使用全局梯度裁剪与紧握采样增强后，8/8 指标门禁通过（38.35 dB / 0.9889 SSIM）。"],
          ["多机修复", "32 芯整集群 (395.1 s)", "4. 多机分布式 MJX 非本地数组与设备锁清理", "8 机 32 芯启动时，mjx.put_model(m, impl='jax') 默认 device=None 会生成跨节点数组导致 IFRT 报错；多行 SSH 清理脚本曾遗留 /dev/vfio/3 占用。", "显式指定 device=local_devs[0] 并改用单行 PID 清理后，32 芯整集群压测在 395.07 s 内完成：411k E2E FPS、952k 3DGS、10.62 亿高斯、63.88B LiDAR rays/s、171.8 亿唯一面及 8K 1,650 spm。"]
        ],
        ablationRows: [
          ["Phase-0 门禁阈值", "≥ 30.0 dB", "≥ 28.0 dB", "≤ 0.010", "<span class='badge cyan'>8/8 全部达标</span>"],
          ["Stage 1 解析直接光基线", "13.83 dB", "—", "—", "仅硬阴影，无间接光"],
          ["M1 像素级 MLP (1×1, 150 ep)", "27.80 dB", "23.52 dB", "0.0500 (7/140)", "<span class='badge fail'>FAIL</span> 缺少空间感受野"],
          ["M2 空间 U-Net (窄通道 W32)", "35.58 dB", "27.79 dB", "0.1000 (14/140)", "<span class='badge fail'>FAIL</span> 接触区遮挡错位"],
          ["M2 空间 U-Net + jnp.clip Loss", "15.20 dB", "—", "—", "<span class='badge fail'>FAIL</span> 第 1 步梯度饱和"],
          ["M2 空间 U-Net (24-ch BRDF, 终版)", "<strong>38.35 dB</strong>", "<strong>30.31 dB</strong>", "<strong>0.00714 (1/140)</strong>", "<span class='badge ok'>PASS (8/8)</span> SSIM 0.9889, 边缘 0.157 px"]
        ],
        rejected: [
          {
            id: "rejected_openusd_clay",
            img: "./assets/postmortem/rejected_openusd_clay.webp",
            banner: "已淘汰样本 · 早期缺少材质贴图绑定",
            title: "淘汰样本 A：早期 OpenUSD 渲染结果（v3_w2_openusd_4k）",
            desc: "在接入完整的迪士尼 Ptex 纹理与水面 BSDF 编译之前，远景植被与海面退化为无纹理低对比度着色。已从正文结果中排除。"
          },
          {
            id: "rejected_garden_seams",
            img: "./assets/postmortem/rejected_garden_seams.webp",
            banner: "已淘汰样本 · 16×16 分块截断接缝",
            title: "淘汰样本 B：早期 32 视角 3DGS 训练渲染（v3_w3_garden_32v_grad）",
            desc: "早期局部 tile 累积边界截断了跨 16×16 分块的高斯尾迹，出现方格接缝与黑边。图像已排除，仅保留修正后的 31.31 dB 训练曲线日志。"
          }
        ],
        honest: "页面中所有性能与精度数字——涵盖单芯、4 芯单机（383 GiB HBM）以及 8 机 32 芯 TPU v5p-64 集群（3.064 TB HBM，v3_pod_v5p64_capstone.json）——均在 Google Cloud TPU v5p 上实测取得，未包含外推估算。须明确区分两项评测口径：(1) 高帧率 Vision RL（32 芯 411k env-FPS、4 芯 266k env-FPS、以及 72 解析刚体双臂代理 41.3k env-FPS / 123.9k cam-FPS）属于 64×64 解析原语光线投射 + 1 条阴影射线；Blender Studio 对齐（BMW27 37.65 dB）基于 Wide-BVH-64 G-Buffer + 神经重打光。而在纯多反弹三角网格蒙特卡洛路径追踪上，GPU 仍快约 100×：Classroom（60.6 万面，3-bounce，360×640）4 芯 TPU 仅 137.9 spm（Lone Monk 561 万面 4-bounce 为 25.7 spm），对比 H100 14,106 spm（exact）与 RTX 5090 19,202 spm（Chai et al., 2026）。(2) XLA gather_ops = 0 指 XLA IR 层无 gather() 算子且无逐光线 HBM 随机查表；MJX 解析投射与 3DGS 可微训练为严格零 gather，3DGS 高速前向在 VMEM 内用 VPU take_along_axis，Wide-BVH-64 在 Pallas 内核中按 8×16（128 光线）tile 发 4 KB / 12 KB pltpu.async_copy 连续块 DMA，并将三角面几何与法线内联打进叶块。未录入单独跑分 JSON 的套件（RoboDojo、MuJoCo Playground、ALOHA、ManiSkill、官方 SAPIEN RoboTwin）标注为「接口兼容」或「代理场景」。",
        authorBio: "从事编译器原生图形渲染、可微物理仿真与 ML 加速器高吞吐具身智能系统的研究与工程实现。",
        ack: "第三方资产与参考致谢：Walt Disney Animation Studios Moana Island Scene v2.1（非商业研究许可）；Blender Open Data / Blender Studio 场景（BMW27、Barcelona Pavilion、Barbershop、Classroom、Junkshop、Lone Monk、Monster Under the Bed、Fishy Cat — CC0 / CC-BY）；Mip-NeRF 360 数据集（Barron et al.）；Google DeepMind mujoco_menagerie（Apache-2.0 / BSD）；Chai et al. (2026) wenhaochai/rtx-h100 H100/RTX PRO 6000 Cycles 基准数据。"
      },
      podStats: [
        ["基准 1 & 2 · MJX 物理 + 3DGS (4 芯 → 32 芯)", "411,023 FPS E2E | 952,248 FPS 3DGS", "从 4 芯 51.5k FPS 扩展 7.97× 至 32 芯 411.0k FPS (B=131k)；128² 3DGS 达 952.2k FPS，ICI 分布式支持 10.62 亿高斯 @ 1080p (3.41 s)。"],
        ["基准 3 · 128×2048 批量 360° LiDAR (32 芯)", "243,676 env-FPS | 63.88B 射线/秒", "8 机 32 芯并行 B=16,384 个 128×2048 LiDAR 仅耗时 67.2 ms（B=32,768 达 229,060 env-FPS / 60.05B 射线/秒，gather_ops = 0）。"],
        ["基准 4 · 几何分片唯一三角面 (32 芯)", "171.8 亿唯一非实例化面 (1.18 TB HBM)", "32 芯 ICI jax.lax.pmin 相对 4 芯 21.5 亿实现 8× 容量扩展，4K 单帧 4.46 s、8K 单帧 8.53 s。"],
        ["基准 5 · 空间分片 8K 3-Bounce 路径追踪 (32 芯)", "1,650.2 spm @ 8K (5.475 GRays/s)", "7680×4320（3,318 万像素）无偏 3 次反弹全局光：4 spp 耗时 145.4 ms（6.88 FPS），1 spp 耗时 37.5 ms（26.69 FPS，host_callbacks = 0）。"]
      ],
      compRows: [
        ["具身视觉 RL、VLA 与触觉", "单张 XLA 计算图：4 芯 266k FPS / 32 芯 411k FPS，142.6 s 生成百万帧，GelSight 270.6k/s", "静态离线渲染器（无 RL 训练闭环）", "成熟的 CUDA Warp / Isaac 生态与 RTX / L40S / H100 工具链"],
        ["Real-to-Sim 3DGS / 4DGS + 物理", "4 芯 142k / 32 芯 952k FPS，10.62 亿高斯，8K garden 29.19 MPix/s，4DGS × MJX 推挤", "仅支持 Cycles 网格与 NRC", "需独立维护 CUDA gsplat 与 USD / PhysX 跨端桥接"],
        ["端到端可微物理 + 渲染", "36.08 dB / 1.63 cm 末端误差（jax.value_and_grad(mjx.step + PBR)，27.9 grad-steps/s）", "不可微离线路径追踪器", "需组合 Warp 可微物理与 Nvdiffrast"],
        ["电影级 OpenUSD 与 Cycles 路径追踪", "大显存容量：Moana（223 亿面占 4.65 GiB）、32 芯 171.8 亿唯一面；神经重打光 BMW27 37.65 dB；纯 MC PT（Classroom 3-bounce 360×640）4 芯 137.9 spm", "速度领先（wenhaochai/rtx-h100）：Classroom 单卡 H100 14,106 spm exact / 55,148 spm NRC，RTX 5090 19,202 spm，RTX PRO 6000 78,297 spm", "完整 Omniverse / OptiX 交互式工作站视口"],
        ["AI 重打光、降噪与超分", "BF16/INT8 MXU：4K 降噪 87.8 FPS、4K DLSS 58.9 FPS、重打光 4K 78.6 FPS / 1080p 307.4 FPS", "NRC-scatter 40.4 img/s（H100 32-spp）", "专用 Tensor Core DLSS 3.5 与光线重建"]
      ],
      ui: {
        copy: "复制", copied: "已复制", zoom4k: "查看原图 ↗", loupe: "1:1 像素放大镜 (L)", raw: "打开原图 ↗",
        footerL: "TPU-RTX · Google Cloud TPU v5p (JAX + Pallas Mosaic)",
        searchPlaceholder: "筛选 23 项实验、场景或 JSON...",
        v3_head: "渲染视频结果（30 fps）",
        v5_head: "具身机器人与可微物理轨迹视频（30 fps）",
        vid_all: "全部 (11)", vid_gs3d: "3DGS / 4DGS (6)", vid_optics: "景深与布料 (3)", vid_relight: "重打光 (2)",
        b_mjx: "具身与机器人仿真", b_gs3d: "3DGS / 4DGS / 集群", b_cinema: "Moana / 布料 / Blender", b_dlss: "TPU-DLSS 3.5 与重打光", b_fx: "路径追踪与光学",
        g_all: "全部 (26)", g_film: "Moana 与 Blender (10)", g_optics: "光学 (3)", g_gs3d: "3DGS / Bistro (6)", g_robotics: "机器人 (5)", g_rej: "淘汰样本 (2)",
        th1: "任务类型", th2: "TPU-RTX (Google TPU v5p)", th3: "GPU Cycles (wenhaochai/rtx-h100)", th4: "NVIDIA Isaac Sim / OptiX",
        gvt1: "对比维度", gvt2: "Google Cloud TPU v5p (TPU-RTX)", gvt3: "NVIDIA GPU (RTX / H100 / Isaac)",
        bs1: "基准 / 套件", bs2: "适配模块", bs3: "状态", bs4: "实测结果或兼容范围",
        ab1: "Stage-2 神经着色器消融", ab2: "PSNR (dB)", ab3: "接触区 PSNR", ab4: "遮挡错位率", ab5: "门禁结果与原因",
        ld_all: "全部 (23)", ld_rob: "机器人", ld_film: "电影与布料", ld_gs: "3DGS / 4DGS", ld_nn: "神经 / 光学",
        lt1: "实验项目", lt2: "配置与规模", lt3: "吞吐量", lt4: "精度与对齐", lt5: "JSON",
        ev_h: "TPU v5p 光追性能优化轨迹（453 → 266,209 FPS；32 芯 411,023 FPS）", ev_s: "按时间顺序记录的吞吐包络，包含负结果与持平试验。",
        gs_h: "3DGS 性能演进：Pallas v1 (659 FPS) → 14.2 万 (4 芯) → 95.2 万 FPS (32 芯)", gs_s: "放弃填充写出并改用分块 VMEM EWA 后，4 芯达 142,008 FPS，32 芯达 952,248 FPS 与 10.62 亿高斯。",
        vm_h: "64 MiB VMEM 溢出边界（tile_size = 512 下降 24%）", vm_s: "单芯 TPU v5p（B = 1024）下随 tile_size 从 64 扫至 512 的端到端帧率。",
        mx_h: "FP32 / BF16 / INT8 W8A8 MXU 精度与吞吐权衡", mx_s: "BF16 在 20.276 dB 无掉点下将 4K 帧率提升至 2.11×（78.6 vs. 37.2 FPS）；INT8 QAT 降低 0.047 dB。",
        orb_h: "主视角 vs. 留出环绕轨迹 PSNR 对齐", orb_s: "在 7 个 Blender Studio 场景中同时评估主视角与多机位留出环绕视角 PSNR。",
        dp_h: "端到端 jax.grad(mjx.step + PBR) 视觉伺服（240 步，8.61 s）", dp_s: "仅使用 RGB L2 像素损失优化 7 自由度力矩，PSNR 从 17.55 升至 36.08 dB，末端误差从 16.03 降至 1.63 cm。",
        pp_h: "HBM 内闭环 Vision PPO 训练曲线", pp_s: "Cartpole（稳态 656.4k/s）、PandaPickCube（173.5k/s）、Humanoid-21DOF（221.7k/s）直接从渲染像素训练。",
        g3_h: "32 视角 3DGS 训练：Mip-NeRF 360 garden (25.5 s)", g3_s: "4 芯数据并行 jax.grad 在 3.22 s 达 28.56 dB，7.50 s 达 30.30 dB，17.11 s 峰值达 31.31 dB（23.42 steps/s）。",
        vl_h: "百万 VLA 帧 (142.6 s)、ViT-Tiny 在线训练与 8×1080p + LiDAR 传感器组", vl_s: "涵盖数据生成、在线 ViT-Tiny 训练、GelSight 视触觉与自动驾驶环视传感器精度对齐。"
      }
    }
  }
};
