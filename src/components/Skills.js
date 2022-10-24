import React from 'react'
import { motion } from "framer-motion"

const Skills = () => {
    return (
        <motion.div className="skills"
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            <div className="bothDivs">
                <div className="skillsSection">
                    <span>TECHNOLOGIES I MAINLY USE:</span>
                    <div className="icons">
                        <div className="technologies">
                            <div className="item">
                                <div className="js"></div>
                                <div className="technologyName">JavaScript</div>
                            </div>
                            <div className="item">
                                <div className="ts"></div>
                                <div className="technologyName">TypeScript</div>
                            </div>
                            <div className="item">
                                <div className="react"></div>
                                <div className="technologyName">React.js</div>
                            </div>
                        </div>
                        <div className="technologies">
                            <div className="item">
                                <div className="css"></div>
                                <div className="technologyName">CSS</div>
                            </div>
                            <div className="item">
                                <div className="bootstrap"></div>
                                <div className="technologyName">Bootstrap</div>
                            </div>
                            <div className="item">
                                <div className="sass"></div>
                                <div className="technologyName">Sass</div>
                            </div>
                        </div>
                        <div className="technologies">
                            <div className="item">
                                <div className="html"></div>
                                <div className="technologyName">HTML</div>
                            </div>
                            <div className="item">
                                <div className="api"></div>
                                <div className="technologyName">REST API</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="textColumn">
                    <span>asdasdasdsa</span>
                    <div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills