'use client'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '../../../components/ui/button';

const TutorialDetail = ({ params }) => {
    console.log(params)
    const { id } = params;
    const [tutorial, setTutorial] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const [codeEditor, setCodeEditor] = useState();

    const handleCodeEditorChange = (value) => {
        setCodeEditor(value);
        console.log(value);
    }

    useEffect(() => {
        if (id) {
            const fetchTutorial = async () => {
                setLoading(true);  // Set loading to true when fetching starts
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_TUTORIAL_API}${id}/`);
                    const data = await response.json();
                    setTutorial(data);
                } catch (error) {
                    console.error('Error fetching tutorial', error);
                } finally {
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
        <div className='container flex flex-col xl:flex-row'>
            <div>

                <Button
                    onClick={() => router.back()}
                    className='mb-8'
                >
                    Go Back
                </Button>
                <div className='container'>
                    <h1 className='text-2xl mb-8'>{tutorial.title}</h1>
                    <p className='text-white/60 mb-8'>{tutorial.description}</p>
                    {/* <h1>{codeEditor}</h1> */}                                 {/* data from code editor */}
                </div>
            </div>
            <AceEditor
                mode="python"           // Set Python as the language
                theme="monokai"         // Choose a theme, e.g., "monokai"
                onChange={handleCodeEditorChange}
                name="python-code-editor"
                editorProps={{ $blockScrolling: true }}
                height="500px"
                width="80%"
                fontSize={16}
                showPrintMargin={false}
                className="border"
            />

        </div>
    );
};

export default TutorialDetail;
