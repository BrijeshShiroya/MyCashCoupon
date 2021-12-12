const type = {
  bold: 'JosefinSans-Bold',
  regular: 'JosefinSans-Regular',
};

const size = {
  h1: 36,
  h2: 34,
  h3: 30,
  h4: 24,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 10,
  label: 16,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  label: {
    fontFamily: type.base,
    fontSize: size.label,
  },
};

export default {
  type,
  size,
  style,
};
