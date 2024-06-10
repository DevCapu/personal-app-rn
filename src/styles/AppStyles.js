import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
},
container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8EAED',
    padding: 20,
},
header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
},
photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: '#333',
    borderWidth: 2,
},
infoContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
},
name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
},
bio: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
    lineHeight: 22,
},
contactContainer: {
    marginVertical: 20,
    width: '100%',
},
contactHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
},
contactInfo: {
    fontSize: 16,
    color: '#666',
    marginVertical: 2,
},
socialContainer: {
    marginVertical: 20,
    width: '100%',
},
socialHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
},
socialLink: {
    fontSize: 16,
    color: '#1e90ff',
    textDecorationLine: 'underline',
    marginVertical: 2,
},
});
