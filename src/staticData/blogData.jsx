export const generateImgPath = (path) => {
    return window.origin + import.meta.env.BASE_URL + path;
};

export const blogs = [
    {
        "blogImage": generateImgPath("assets/images/blog/blog-1.jpg"),
        "blogPublishDate": "September 23, 2022",
        "blogCategory": "Health Care",
        "blogTag": "Healthcare",
        "blogAuthod": "Pasyale Wedamedura",
        "blogTitle": "The Healing Power of Ayurveda: Turmeric and Natural Remedies",
        "blogDescription": "Explore how Ayurvedic herbs like turmeric, ginger, and lime are transforming modern healthcare practices and their role in boosting immunity and overall wellness."
    },
    {
        "blogImage": generateImgPath("assets/images/blog/blog-2.png"),
        "blogPublishDate": "September 23, 2022",
        "blogCategory": "Eye Care",
        "blogTag": "Healh News",
        "blogAuthod": "Pasyale Wedamedura",
        "blogTitle": "Holistic Solutions for Dry Eyes Using Ayurvedic Remedies",
        "blogDescription": "Learn about Ayurvedic eye care practices, including the use of herbal oils and natural therapies to relieve dry eye syndrome and enhance eye health."
    },
    {
        "blogImage": generateImgPath("assets/images/blog/blog-3.jpg"),
        "blogPublishDate": "September 23, 2022",
        "blogCategory": "Disease",
        "blogTag": "Vaccin",
        "blogAuthod": "Pasyale Wedamedura",
        "blogTitle": "Harnessing the Power of Ayurveda for Disease Prevention",
        "blogDescription": "Discover the role of Ayurvedic herbs and spices, such as ashwagandha and cinnamon, in preventing diseases and improving overall well-being."
    },
    {
        "blogImage": generateImgPath("assets/images/blog/blog-4.jpg"),
        "blogPublishDate": "September 23, 2022",
        "blogCategory": "Health Care",
        "blogTag": "Healthcare",
        "blogAuthod": "Pasyale Wedamedura",
        "blogTitle": "Natural Beauty Care: Ayurvedic Oils and Herbs",
        "blogDescription": "Dive into Ayurvedic beauty secrets, from herbal facial oils to rejuvenating treatments using natural ingredients like rose, grapefruit, and essential oils."
    },
    
]