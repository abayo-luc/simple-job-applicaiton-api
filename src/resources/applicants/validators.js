import { celebrate, Joi } from 'celebrate';

export const createApplicant = celebrate({
  body: Joi.object().keys({
    email: Joi.string().label('Email Address').email().required(),
    firstName: Joi.string().label('First Name').required(),
    lastName: Joi.string().label('Last Name').required(),
    phoneNumber: Joi.string().label('Phone Number').required(),
    cv: Joi.string().label('Personal CV').required(),
    comment: Joi.string().label('Comment'),
  }),
});

export const changeStatus = celebrate({
  body: Joi.object().keys({
    status: Joi.string()
      .label('Applicant status')
      .valid('pending', 'invited', 'passed', 'failed')
      .required(),
  }),
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
});

export const getOne = celebrate({
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
});
