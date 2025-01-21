import type { SitemapOptions } from '@astrojs/sitemap';

export const languages = ['zh-CN', 'en-US'] as const;
export type LangType = (typeof languages)[number];

export interface SlateConfig {
  /** 最终部署的链接 */
  site: string;
  /** 语言 */
  lang?: LangType;
  /** 头像 */
  avatar?: string;
  /** sitemap 配置 */
  sitemap?: SitemapOptions;
  /** 网站标题 */
  title: string;
  /** 网站描述 */
  description: string;
  /** 是否显示阅读时间 */
  readTime?: boolean;
  /** 是否显示最后修改时间 */
  lastModified?: boolean;
  /** docsearch 配置 */
  algolia?: {
    appId: string;
    apiKey: string;
    indexName: string;
  };
  /** 网站底部配置 */
  footer?: {
    copyright: string;
  };
  /** follow订阅认证配置 */
  follow?: {
    feedId: string;
    userId: string;
  };
}
