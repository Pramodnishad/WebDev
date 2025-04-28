import React from 'react'
import ChildToggle from './ChildToggle'
import { useState } from 'react'

const ParentToggle = () => {
    const [toggle, setToggle] = useState(0)

    return (
        <div>
            <h2>Almaty, Kazakhstan</h2>
            <ChildToggle 
                title="About"
                isActive={toggle === 0}
                show={()=>setToggle(0)}
            >
                <p>With a population of about 2 million, Almaty is Kazakhstan's largest city.
                    From 1929 to 1997, it was its capital city.</p>
            </ChildToggle >
            <ChildToggle
                title="Etymology"
                isActive={toggle === 1}
                show={()=>setToggle(1)}
            >
                <p>        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
                    "apple" and is often translated as "full of apples". In fact, the region surrounding
                    Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus
                        sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
                </p>
            </ChildToggle >

        </div>
    )
}

export default ParentToggle