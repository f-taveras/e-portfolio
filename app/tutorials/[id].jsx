import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const TutorialDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [tutorial, setTutorial] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const fetchTutorial = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/tutorials/${id}/`);
                    const data = await response.json();
                    setTutorial(data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching tutorial', error);
                    setLoading(false);
                }
            };
            fetchTutorial();
        } 
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!tutorial) {
        return <p>No tutorial found</p>;
    }

    return (
        <div>
            <h1>{tutorial.title}</h1>
            <p>{tutorial.description}</p>
        </div>
    );
    
}


export default TutorialDetail;