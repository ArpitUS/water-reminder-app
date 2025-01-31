import GoogleFit, { Scopes } from 'react-native-google-fit';

export const syncHydrationData = async (waterIntake) => {
  const options = {
    scopes: [Scopes.FITNESS_NUTRITION_WRITE, Scopes.FITNESS_NUTRITION_READ],
  };

  GoogleFit.authorize(options)
    .then(authResult => {
      if (authResult.success) {
        GoogleFit.saveHydration({ date: new Date().toISOString(), waterConsumed: waterIntake });
      } else {
        console.log('Google Fit Authorization Failed');
      }
    })
    .catch(error => console.log(error));
};
