/**
 *  获取枚举每一项的值
 * @param enumValue 枚举值,支持数字枚举和字符串枚举
 * @returns number[] | string[]
 */
export function getEnumValues(
  enumValue: Record<string, number | string>
): number[] | string[] {
  const values = Object.values(enumValue)
  const isNumber = values.find((item) => typeof item === 'number')
  return isNumber
    ? (values.filter((item) => typeof item === 'number') as number[])
    : (values as string[])
}
