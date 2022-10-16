export const dataRating = [
  {
    scores: 5,
    value: 80,
  },
  {
    scores: 4,
    value: 70,
  },
  {
    scores: 3,
    value: 30,
  },
  {
    scores: 2,
    value: 20,
  },
  {
    scores: 1,
    value: 10,
  },
];

export const dataReview = [
  {
    id: '1',
    author: 'Mohammed T.',
    rating: 4,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        laudantium doloremque consectetur vitae sunt dolorum et voluptatum
        deleniti, dolores totam odit quos nobis obcaecati iure corporis
        recusandae? Illum, architecto rem.`,
    created: '10th September, 2000',
    liked: 2,
    disliked: 0,
    parentId: null,
    subComments: [
      {
        id: '1235',
        author: 'Mohammed T.',
        rating: 0,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
                      laudantium doloremque consectetur vitae sunt dolorum et voluptatum
                      deleniti, dolores totam odit quos nobis obcaecati iure corporis
                      recusandae? Illum, architecto rem.`,
        created: '10th September, 2000',
        liked: 2,
        disliked: 0,
        parentId: '1',
        subComments: [],
      },
      {
        id: '234',
        author: 'Mohammed T.',
        rating: 4,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              laudantium doloremque consectetur vitae sunt dolorum et voluptatum
              deleniti, dolores totam odit quos nobis obcaecati iure corporis
              recusandae? Illum, architecto rem.`,
        created: '10th September, 2000',
        liked: 2,
        disliked: 0,
        parentId: '1',
        subComments: [],
      },
    ],
  },
  {
    id: '2',
    author: 'Onu Princeley T.',
    rating: 5,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        laudantium doloremque consectetur vitae sunt dolorum et voluptatum
        deleniti, dolores totam odit quos nobis obcaecati iure corporis
        recusandae? Illum, architecto rem.`,
    created: '12th January, 2024',
    liked: 4,
    disliked: 1,
    parentId: null,
    subComments: [
      {
        id: '345',
        author: 'Onu Princeley T.',
        rating: 5,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            laudantium doloremque consectetur vitae sunt dolorum et voluptatum
            deleniti, dolores totam odit quos nobis obcaecati iure corporis
            recusandae? Illum, architecto rem.`,
        created: '12th January, 2024',
        liked: 4,
        disliked: 1,
        parentId: '2',
      },
    ],
  },
  {
    id: '3',
    author: 'Naman A.',
    rating: 4,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        laudantium doloremque consectetur vitae sunt dolorum et voluptatum
        deleniti, dolores totam odit quos nobis obcaecati iure corporis
        recusandae? Illum, architecto rem.`,
    created: '12th January, 2024',
    liked: 100,
    disliked: 0,
    parentId: null,
    subComments: [
      {
        id: '1235',
        author: 'Mohammed T.',
        rating: 0,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              laudantium doloremque consectetur vitae sunt dolorum et voluptatum
              deleniti, dolores totam odit quos nobis obcaecati iure corporis
              recusandae? Illum, architecto rem.`,
        created: '10th September, 2000',
        liked: 2,
        disliked: 0,
        parentId: '3',
      },
    ],
  },
  {
    id: '4',
    author: 'Divyesh P.',
    rating: 4,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        laudantium doloremque consectetur vitae sunt dolorum et voluptatum
        deleniti, dolores totam odit quos nobis obcaecati iure corporis
        recusandae? Illum, architecto rem.`,
    created: '12th January, 2024',
    liked: 2,
    disliked: 0,
    parentId: null,
    subComments: [],
  },
];
