/*
 * @Author: kim
 * @Description: 配置处理
 */
import type { SlateConfig } from '@/typings/config';

/** 默认配置 */
const defaultConfig: Partial<SlateConfig> = {
  lang: 'zh-CN',
  readTime: false,
  lastModified: false,
};

export function defineConfig(config: SlateConfig): SlateConfig {
  const mergedConfig: Partial<SlateConfig> = {};

  return Object.assign({}, defaultConfig, config, mergedConfig);
}
