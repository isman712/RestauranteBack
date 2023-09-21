CREATE DATABASE ADBRestautante;
USE ADBRestautante;
CREATE TABLE Menu (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    descripcion TEXT,
    precio DECIMAL(10, 2),
    tipo VARCHAR(50)
);

CREATE TABLE Ordenes (
    orden_id INT PRIMARY KEY AUTO_INCREMENT,
    mesa_id INT,
    fecha_orden DATETIME,
    total DECIMAL(10, 2)
);

CREATE TABLE PedidosCarrito (
    pedidocarrito_id INT PRIMARY KEY AUTO_INCREMENT,
    carrito_id INT,
    producto_id INT,
    cantidad INT,
    FOREIGN KEY (carrito_id) REFERENCES Ordenes(orden_id),
    FOREIGN KEY (producto_id) REFERENCES Menu(item_id)
);