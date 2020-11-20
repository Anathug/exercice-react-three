import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { FontLoader } from 'three'

import Lato from '../assets/Lato_Bold.json'



const Cube = (props) => {
    const mesh = useRef()
    const text = useRef()

    const font = new FontLoader().parse(Lato);

    const textOptions = {
        font,
        size: 0.3,
        height: 1
    }

    useFrame(() => {
        if (props.animated) mesh.current.rotation.x = mesh.current.rotation.y += 0.01 * props.speed
    })
    return (
        <group>
            <mesh
                ref={text}
                {...props}
                rotation={[0, 0, 0]}
            >
                <textGeometry attach="geometry" args={[`${props.index}`, textOptions]} />
                <meshStandardMaterial color={props.color} />
            </mesh>
            <mesh
                ref={mesh}
                {...props}
                rotation={[0, 0, 0]}
            >
                <boxBufferGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={props.color} />
            </mesh>
        </group>
    )
}

export default Cube