import { formatPrice  } from '../utils';

describe('formatPrice', () => {
  it('should format a number correctly as EUR currency', () => {
    const price = 1234.56;
    const result = formatPrice(price);
    expect(result).toBe('€1,234.56');
  });

  it('should format a bigint correctly as EUR currency', () => {
    const price = BigInt(1234567890123456);
    const result = formatPrice(price);
    expect(result).toBe('€1,234,567,890,123,456.00');
  });

  it('should handle small numbers and format with two decimal places', () => {
    const price = 0.99;
    const result = formatPrice(price);
    expect(result).toBe('€0.99');
  });

  it('should handle large numbers and format correctly', () => {
    const price = 9876543210.99;
    const result = formatPrice(price);
    expect(result).toBe('€9,876,543,210.99');
  });
});
