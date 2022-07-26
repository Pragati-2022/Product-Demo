import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    {
      id: 1,
      image:
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
      attributes: [
        {
          id: '1',
          key: 'Collection',
          value: 'Brunches & Dinners ',
          display: true,
        },
        {
          id: '2',
          key: 'Category ',
          value: 'Dresses ',
          display: true,
        },
        {
          id: '3',
          key: 'Size',
          value: 'L',
          display: false,
        },
        {
          id: '4',
          key: 'Color',
          value: 'Pink',
          display: true,
        },
        {
          id: '5',
          key: 'Wash Care',
          value: 'Dry Clean ',
          display: true,
        },
        {
          id: '6',
          key: 'Fabric',
          value: 'Rayon',
          display: true,
        },
      ],
      price: 1999,
      size: 'L',
      images: [
        'https://cdn.ainabys4u.com/product/66672477f11f49298dc104472bcca31b.jpg',
        'https://cdn.ainabys4u.com/product/66672477f11f49298dc104472bcca31b.jpg',
        'https://cdn.ainabys4u.com/product/66672477f11f49298dc104472bcca31b.jpg',
        'https://cdn.ainabys4u.com/product/66672477f11f49298dc104472bcca31b.jpg',
      ],
      name: 'floral print jacket with smoking inner',
      description:
        'Rekindle your inner elegance by wearing our beautiful blue shades of high slit kurta palazzo set. It is an ode to ethnic charm. With a flowy dupatta and stylish neckline, it will keep you trendily chic.',
      quantity: 1,
      variantsParameters: [
        {
          attribCode: 'Size',
          attribId: '628b60af657ef25f2262e8d4',
          attribType: 'Dropdown',
          label: 'Size',
          possibleValues: ['M', 'L', 'XL'],
          selectedValue: 'M',
          variants: [
            {
              label: 'Size',
              value: 'M',
              selected: true,
              code: 'Size',
              isStock: true,
            },
            {
              label: 'Size',
              value: 'L',
              selected: false,
              code: 'Size',
              isStock: true,
            },
            {
              label: 'Size',
              value: 'XL',
              selected: false,
              code: 'Size',
              isStock: true,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      image:
        'https://cdn.ainabys4u.com/cms/1a0dc6fc050c48ba9654a12dfd89665d.jpg',
      attributes: [
        {
          id: '1',
          key: 'Collection',
          value: 'Brunches & Dinners ',
          display: true,
        },
        {
          id: '2',
          key: 'Category ',
          value: 'Dresses ',
          display: true,
        },
        {
          id: '3',
          key: 'Size',
          value: 'L',
          display: false,
        },
        {
          id: '4',
          key: 'Color',
          value: 'Pink',
          display: true,
        },
        {
          id: '5',
          key: 'Wash Care',
          value: 'Dry Clean ',
          display: true,
        },
        {
          id: '6',
          key: 'Fabric',
          value: 'Rayon',
          display: true,
        },
      ],
      price: 1999,
      size: 'L',
      images: [
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
      ],
      name: 'floral print jacket with smoking inner',
      description:
        'Rekindle your inner elegance by wearing our beautiful blue shades of high slit kurta palazzo set. It is an ode to ethnic charm. With a flowy dupatta and stylish neckline, it will keep you trendily chic.',
      quantity: 1,
      variantsParameters: [
        {
          attribCode: 'Size',
          attribId: '628b60af657ef25f2262e8d4',
          attribType: 'Dropdown',
          label: 'Size',
          possibleValues: ['M', 'L', 'XL'],
          selectedValue: 'M',
          variants: [
            {
              label: 'Size',
              value: 'M',
              selected: true,
              code: 'Size',
              isStock: true,
            },
            {
              label: 'Size',
              value: 'L',
              selected: false,
              code: 'Size',
              isStock: true,
            },
            {
              label: 'Size',
              value: 'XL',
              selected: false,
              code: 'Size',
              isStock: true,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      image:
        'https://cdn.ainabys4u.com/cms/15632fa549394fb29deaf13ccde420db.jpg',
      attributes: [
        {
          id: '1',
          key: 'Collection',
          value: 'Brunches & Dinners ',
          display: true,
        },
        {
          id: '2',
          key: 'Category ',
          value: 'Dresses ',
          display: true,
        },
        {
          id: '3',
          key: 'Size',
          value: 'L',
          display: false,
        },
        {
          id: '4',
          key: 'Color',
          value: 'Pink',
          display: true,
        },
        {
          id: '5',
          key: 'Wash Care',
          value: 'Dry Clean ',
          display: true,
        },
        {
          id: '6',
          key: 'Fabric',
          value: 'Rayon',
          display: true,
        },
      ],
      price: 1999,
      size: 'L',
      images: [
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
      ],
      name: 'floral print jacket with smoking inner',
      description:
        'Rekindle your inner elegance by wearing our beautiful blue shades of high slit kurta palazzo set. It is an ode to ethnic charm. With a flowy dupatta and stylish neckline, it will keep you trendily chic.',
      quantity: 1,
      variantsParameters: [
        {
          attribCode: 'Size',
          attribId: '628b60af657ef25f2262e8d4',
          attribType: 'Dropdown',
          label: 'Size',
          possibleValues: ['M', 'L', 'XL'],
          selectedValue: 'M',
          variants: [
            {
              label: 'Size',
              value: 'M',
              selected: true,
              code: 'Size',
              isStock: true,
            },
            {
              label: 'Size',
              value: 'L',
              selected: false,
              code: 'Size',
              isStock: true,
            },
            {
              label: 'Size',
              value: 'XL',
              selected: false,
              code: 'Size',
              isStock: true,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      image:
        'https://cdn.ainabys4u.com/cms/06640f84b4df4064891d5ec5e619e717.jpg',
      attributes: [
        {
          id: '1',
          key: 'Collection',
          value: 'Brunches & Dinners ',
          display: true,
        },
        {
          id: '2',
          key: 'Category ',
          value: 'Dresses ',
          display: true,
        },
        {
          id: '3',
          key: 'Size',
          value: 'L',
          display: false,
        },
        {
          id: '4',
          key: 'Color',
          value: 'Pink',
          display: true,
        },
        {
          id: '5',
          key: 'Wash Care',
          value: 'Dry Clean ',
          display: true,
        },
        {
          id: '6',
          key: 'Fabric',
          value: 'Rayon',
          display: true,
        },
      ],
      price: 1999,
      size: 'L',
      images: [
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
      ],
      name: 'floral print jacket with smoking inner',
      description:
        'Rekindle your inner elegance by wearing our beautiful blue shades of high slit kurta palazzo set. It is an ode to ethnic charm. With a flowy dupatta and stylish neckline, it will keep you trendily chic.',
      quantity: 1,
      variantsParameters: [
        {
          attribCode: 'Size',
          attribId: '628b60af657ef25f2262e8d4',
          attribType: 'Dropdown',
          label: 'Size',
          possibleValues: ['M', 'L', 'XL'],
          selectedValue: 'M',
          variants: [
            {
              label: 'Size',
              value: 'M',
              selected: true,
              code: 'Size',
              isStock: true,
            },
            {
              label: 'Size',
              value: 'L',
              selected: false,
              code: 'Size',
              isStock: true,
            },
            {
              label: 'Size',
              value: 'XL',
              selected: false,
              code: 'Size',
              isStock: true,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      image:
        'https://cdn.ainabys4u.com/cms/a6de9dbf90114ce2ba78a79fe8f6788d.jpg',
      attributes: [
        {
          id: '1',
          key: 'Collection',
          value: 'Brunches & Dinners ',
          display: true,
        },
        {
          id: '2',
          key: 'Category ',
          value: 'Dresses ',
          display: true,
        },
        {
          id: '3',
          key: 'Size',
          value: 'L',
          display: false,
        },
        {
          id: '4',
          key: 'Color',
          value: 'Pink',
          display: true,
        },
        {
          id: '5',
          key: 'Wash Care',
          value: 'Dry Clean ',
          display: true,
        },
        {
          id: '6',
          key: 'Fabric',
          value: 'Rayon',
          display: true,
        },
      ],
      price: 1999,
      size: 'L',
      images: [
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
      ],
      name: 'floral print jacket with smoking inner',
      description:
        'Rekindle your inner elegance by wearing our beautiful blue shades of high slit kurta palazzo set. It is an ode to ethnic charm. With a flowy dupatta and stylish neckline, it will keep you trendily chic.',
      quantity: 1,
      variantsParameters: [
        {
          attribCode: 'Size',
          attribId: '628b60af657ef25f2262e8d4',
          attribType: 'Dropdown',
          label: 'Size',
          possibleValues: ['M', 'L', 'XL'],
          selectedValue: 'M',
          variants: [
            {
              label: 'Size',
              value: 'M',
              selected: true,
              code: 'Size',
              isStock: true,
            },
            {
              label: 'Size',
              value: 'L',
              selected: false,
              code: 'Size',
              isStock: true,
            },
            {
              label: 'Size',
              value: 'XL',
              selected: false,
              code: 'Size',
              isStock: true,
            },
          ],
        },
      ],
    },
  ];
  constructor() {}
}
