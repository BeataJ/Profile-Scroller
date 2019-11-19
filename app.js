const data = [
  {
    name: 'Joe Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston, MA',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami, FL',
    image: 'https://randomuser.me/api/portraits/women/75.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn, MA',
    image: 'https://randomuser.me/api/portraits/men/76.jpg'
  },
]

const profiles = profileIterator(data);

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++], done: false} :
      {done: true}
    }
  };
}