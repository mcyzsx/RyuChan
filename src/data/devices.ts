// 设备数据配置文件

export interface Device {
  name: string;
  image: string;
  specs: string;
  description: string;
  link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
  [categoryName: string]: Device[];
} & {
  自定义?: Device[];
};

export const devicesData: DeviceCategory = {
  OnePlus: [
    {
      name: "IQOO 11",
      image: "https://shopstatic.vivo.com.cn/vivoshop/commodity/52/10007952_1669636269985_750x750.png.webp",
      specs: "Black / 16GB+512GB",
      description: "第二代骁龙 8|2K 144Hz E6 全感屏|自研芯片 V2|120W超快闪充|全感操控系统",
      link: "https://shop.vivo.com.cn/product/10007952?skuId=125337",
    },
  ],
//   Router: [
//     {
//       name: "GL-MT3000",
//       image: "/images/device/mt3000.png",
//       specs: "1000Mbps / 2.5G",
//       description:
// eslint-disable-next-line style/no-tabs
// 				"Portable WiFi 6 router suitable for business trips and home use",
//       link: "https://www.gl-inet.cn/products/gl-mt3000/",
//     },
//   ],
};
