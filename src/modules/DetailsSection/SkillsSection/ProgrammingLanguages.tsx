import { Language, languages } from "../../../assets/data/languageData";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ProgrammingLanguages: React.FC = () => {
    const [selectedLang, setSelectedLang] = useState<Language | null>(null);

    return (
        <>
            <div className="w-full prose max-w-1/2 prose-h4:text-slate-300 prose-h4:font-medium prose-h4:my-2 text-slate-400 prose-strong:text-slate-400">
                <h4>Programming Languages</h4>
                <div className="w-full flex flex-row flex-wrap items-center justify-stretch gap-2">
                    {languages?.map((l) => (
                        <div
                            key={`skills-language-${l.name}`}
                            onClick={() => setSelectedLang(l)}
                            className="flex-grow rounded-lg flex justify-center items-center h-[50px] bg-slate-800 px-2 cursor-pointer lg:hover:shadow-[0_0_0_2px] lg:hover:shadow-primary-400 transition-[box-shadow] duration-300"
                        >
                            {l.name}
                        </div>
                    ))}
                </div>
            </div>

            {selectedLang && (
                <div
                    onClick={() => setSelectedLang(null)}
                    className="fixed top-0 right-0 left-0 bottom-0 z-[100] bg-black/30"
                    style={{
                        backdropFilter: "blur(5px)",
                        pointerEvents: "all",
                    }}
                />
            )}
            {selectedLang && (
                <div
                    className="fixed z-[100] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 prose max-w-[90vw] w-full md:max-w-[500px] max-h-[80vh] overflow-y-auto bg-slate-800/80 prose-h3:text-slate-300 prose-p:text-slate-400 p-4 rounded-lg prose-h4:text-slate-300"
                    style={{ backdropFilter: "blur(10px)" }}
                >
                    <h3 className="flex flex-row justify-between items-center">
                        {selectedLang.name}
                        <button
                            onClick={() => setSelectedLang(null)}
                            className="rounded-lg text-slate-400"
                        >
                            <FaTimes />
                        </button>
                    </h3>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: selectedLang.description,
                        }}
                    />
                    <h4>Related Projects</h4>
                    <div className="flex flex-col gap-4 prose prose-h5:my-0 prose-p:my-0 prose-p:text-slate-400 prose-h5:text-slate-300 prose-a:text-primary-400 lg:hover:prose-a:text-primary-200 prose-a:no-underline">
                        {selectedLang.projects.map((p) => (
                            <div
                                key={`lang-projects-${p.title}`}
                                className="flex flex-col p-4 rounded-lg bg-slate-700/30"
                            >
                                <h5>{p.title}</h5>
                                <p>{p.summary}</p>
                                <div className="w-full flex flex-row items-center gap-4">
                                    {p.githubLink && (
                                        <a
                                            href={p.githubLink}
                                            className="hover:underline"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {p.liveLink && (
                                        <a
                                            href={p.liveLink}
                                            className="hover:underline"
                                        >
                                            LiveLink
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProgrammingLanguages;
