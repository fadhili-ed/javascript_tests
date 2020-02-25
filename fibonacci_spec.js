import fibonacci from '../../fibonacci';
describe('fibonacci', () => {
  it('should calculate fibonacci correctly', () => {
    expect(fibonacci(1)).to.eql([1]);
    expect(fibonacci(2)).to.eql([1, 1]);
    expect(fibonacci(3)).to.eql([1, 1, 2]);
    expect(fibonacci(4)).to.eql([1, 1, 2, 3]);
    expect(fibonacci(5)).to.eql([1, 1, 2, 3, 5]);
    expect(fibonacci(6)).to.eql([1, 1, 2, 3, 5, 8]);
    expect(fibonacci(7)).to.eql([1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(8)).to.eql([1, 1, 2, 3, 5, 8, 13, 21]);
    expect(fibonacci(9)).to.eql([1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacci(10)).to.eql([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
