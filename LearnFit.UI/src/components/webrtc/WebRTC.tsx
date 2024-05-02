import Peer, { DataConnection } from "peerjs";
import { useEffect, useRef, useState } from "react";


interface SharedData {
    sharedCounter: number;
}


export default function WebRTC() {
    const [peer, setPeer] = useState<Peer | null>(null);
    const [sharedCounter, setSharedCounter] = useState(0);
    const [peerId, setPeerId] = useState<string>("");
    const [remotePeerId, setRemotePeerId] = useState<string>("");

    const peerConnection = useRef<DataConnection | null>(null);

    useEffect(() => {

        const peer = new Peer();

        peer.on('open', (id) => {
            setPeerId(id);
        });

        peer.on('connection', (conn) => {
            console.log('Connection received');
            peerConnection.current = conn;
            conn.on('data', (data) => {
                console.log('Received', data);
                setSharedCounter((data as SharedData).sharedCounter);
            });
        });

        setPeer(peer);

    }, []);

    const connectToRemotePeer = () => {
        const conn = peer?.connect(remotePeerId);
        conn?.on('open', () => {
            console.log('Connected to remote peer');
            peerConnection.current = conn;
            conn.send({ sharedCounter });
        });
        conn?.on('data', (data) => {
            console.log('Received', data);
            setSharedCounter((data as SharedData).sharedCounter);
        });
    }

    const updateSharedCounter = (counter: number) => {
        setSharedCounter(counter);
        peerConnection.current?.send({ sharedCounter: counter });
    }

    return (
        <div>
            <h2>Peer ID: {peerId}</h2>
            <input type="text" value={remotePeerId} onChange={(e) => { setRemotePeerId(e.target.value) }} />
            <button onClick={connectToRemotePeer}>Connect</button>
            <h2>Shared Counter: {sharedCounter}</h2>
            <button onClick={() => {
                updateSharedCounter(sharedCounter + 1);
            }}>Increment</button>

        </div>
    );
}