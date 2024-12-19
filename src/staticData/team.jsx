export const generateImgPath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

export const teamData = [
    {
        "teamImage": generateImgPath("assets/images/team/team-1.jpg"),
        "teamMemberName": "Dr. Damith Ganegoda",
        "teamSpecialized": "Ayurvedic"
    },
    
]