import slateConfig from '~@/slate.config';

/**
 * @description: 获取完整标题
 * @param title
 */
export function getFullTitle(title: string) {
  return `${title}${!!title && slateConfig.title ? ' | ' : ''}${slateConfig.title}`;
}
