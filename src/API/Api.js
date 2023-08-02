

export const api = {

   async getLaunches(){
      const response = await fetch('https://api.spacexdata.com/v5/launches');
      
      if (!response.ok) {
         throw new Error('Server Error!');
     }
     const data = await response.json();

     return data;
   }
}