import faker from 'faker';
import { db } from '../firebase';

const Users = db.collection('users');
const Groups = db.collection('groups');

export const seedUsers = () => {
  console.log('off');
  // console.log('Seeding...')
  // for (let i = 0; i < 10; i++) {
  //   const user = {
  //     displayName: faker.name.findName(),
  //     email: faker.internet.email(),
  //     photoURL: `https://i.pravatar.cc/150?u=${faker.internet.email()}`,
  //     createdAt: Date.now()
  //   };
  //   Users.add(user);
  // }
}

export const seedGroups = (profile) => {
  console.log('Seeding groups...');

  for (let i = 0; i < 10; i++) {
    Users.limit(4).get().then(snapshot => {
      const users = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })

      const userIds = users.map(user => user.id);

      const newGroup = {
        image: 'https://images.unsplash.com/photo-1608635361103-0d323bac82f9?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: faker.lorem.slug(3),
        description: faker.lorem.sentence(),
        userIds: [
          ...userIds,
          profile.id
        ],
        users: [
          ...users,
          profile
        ]
      };

      Groups.add(newGroup);
    }).catch(err => console.log(err))

  }
}
