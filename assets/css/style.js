export default styles = {
    ul: {
      borderRadius: 10,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      height:70,
      borderRadius:30,
      flexDirection: 'row',
      flex: 1,
      margin: 8,
      padding: 10,
      backgroundColor: '#1C9EE6',
    },
    li: {
        textAlign: 'center',
      color: '#262626',
      fontSize: 15,
    },
    liHr: {
      
        color: '#262626',
        fontSize: 15,
      },
    foto: {
    
      borderRadius:30,
      width: 170,
      height: 130,
    },
   

    ulHr:{
        alignItems:'flex-end',
        position: 'absolute',
        bottom: 5, // distância do canto inferior em pixels
        right: 10, // distância do canto direito em pixels
    },

    container: {
        position: 'absolute',
        bottom: 10, // distância do canto inferior em pixels
        right: 10, // distância do canto direito em pixels
      },
      button: {
        borderRadius:10000,
        width: 70,
        height: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // exemplo de opacidade de 50%
        justifyContent: 'center',
        alignItems: 'center',
      },
  };
  