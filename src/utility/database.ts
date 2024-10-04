import type { Crew, Destination, Main, Technology } from '../interfaces/data';
import datajson  from '../data/data.json';
import type { NtLink } from '../interfaces/nt-link';

const data :Main = datajson;

export const getHeaderNavLinks = (includeHome:boolean = true) :NtLink[] => {
    let navLinks: NtLink[] = [];
    
    if(includeHome)
        navLinks.push({name: 'home', ref: '/'});

    const keys : string[] = Object.keys(data);
    
    navLinks.push({name:`${keys.at(0)}`, ref:`/${keys.at(0)}/${data.destinations.at(0)?.name.toLowerCase()}`});
    navLinks.push({name:`${keys.at(1)}`, ref:`/${keys.at(1)}/${data.crew.at(0)?.name.toLowerCase()}`});
    navLinks.push({name:`${keys.at(2)}`, ref:`/${keys.at(2)}/${data.technology.at(0)?.name.toLowerCase()}`});
    
    return navLinks;
}

export const getDestinationsTabLinks = () : NtLink[] => {
    let tablinks :NtLink[] = [];
    const dests : Destination[] = data.destinations;

    dests.forEach((d)=>{
        tablinks.push({name:`${d.name.toLowerCase()}`, ref:`/destinations/${d.name.toLowerCase()}`});
    });
    return tablinks;
}

export const getDestination = (name :string) :Destination | undefined => {
    return data.destinations.find( d => d.name.toLowerCase() === name );
}
export const getCrewTabLinks = () : NtLink[] => {
    let tablinks :NtLink[] = [];
    const crew : Crew[] = data.crew;

    crew.forEach((c)=>{
        tablinks.push({name:`${c.name.toLowerCase()}`, ref:`/crew/${c.name.toLowerCase()}`});
    });
    return tablinks;
}
export const getCrew = (name :string) :Crew | undefined => {
    return data.crew.find( c => c.name.toLowerCase() === name );
}
export const getTechnologyTabLinks = () : NtLink[] => {
    let tablinks :NtLink[] = [];
    const tec : Technology[] = data.technology;

    tec.forEach((t)=>{
        tablinks.push({name:`${t.name.toLowerCase()}`, ref:`/technology/${t.name.toLowerCase()}`});
    });

    return tablinks;
}
export const getTechnology = (name :string) :Technology | undefined => {
    return data.technology.find( t => t.name.toLowerCase() === name );
}