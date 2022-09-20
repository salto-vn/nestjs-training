import {registerDecorator, ValidationArguments, ValidationOptions} from 'class-validator';

export const IsValidRelation = (property?: string,validationOptions?: ValidationOptions) => {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'validPhoneNumber',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          // const [relatedPropertyName] = args.constraints;
          // const relatedValue = (args.object as any)[relatedPropertyName];
          return (
            typeof value === 'string' &&
            // typeof relatedValue === 'string' &&
            /(single)|(married)|(divorce)/.test(value)
          );
        },
      },
    });
  };
}
