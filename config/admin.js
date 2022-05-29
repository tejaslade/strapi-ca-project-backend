module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd3f84968de76a95dcdc1a0ac0caae57b'),
  },
});
