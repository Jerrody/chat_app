const SERVER_LOCALHOST_ADDRESS: ([u8; 4], u16) = ([127, 0, 0, 1], 2525);

fn main() {
    let listen_on = std::net::SocketAddr::from(SERVER_LOCALHOST_ADDRESS);

    let pg = 
}
