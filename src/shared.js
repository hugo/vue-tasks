export const setProp = (prop) => (val) => (on) => {
  on[prop] = val
}
