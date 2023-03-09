export const srcSwapi ='https://swapi.dev/api/people';
export const srcImage = 'https://starwars-visualguide.com//assets/img/characters/';
export const getApiResourse =async (src) =>{
        try {
            const res = await fetch(src);
            if(!res.ok){
                console.error('Could nor fetch',res.status);
                return false;
            }
            return await res.json();
        } catch (error) {
            console.error('Could nor fetch');
            return false;
        }
}

console.log(getApiResourse(srcSwapi));