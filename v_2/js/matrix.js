class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;

        this.data = [];

        for (let i = 0; i < rows; i++) {
            let arr = [];
            for (let j = 0; j < cols; j++) {
                arr.push(0);
            }
            this.data.push(arr);
        }
    }

    // Funções diversas
    static erroMedio(arr) {
        let sum = 0

        for(let i=0; i<arr.length; i++){
            sum += ( arr[i] )**2
        }
        
        return sum
    }

    static arrayToMatrix(arr) {
        let matrix = new Matrix(arr.length, 1)
        matrix.map((elem, i, j) => {
            return arr[i]
        })
        return matrix
    }

    static MatrixToArray(obj) {
        let arr = []

        obj.map((elem, i, j) => {
            arr.push(elem)
        })
        return arr
    }

    print() {
        console.table(this.data)
    }

    randomize() {
        this.map((elem, i, j) => {
            return Math.random() * 2 - 1
            // return Math.floor(Math.random() * 10)
        })
    }

    static map(A, func) {

        let matrix = new Matrix(A.rows, A.cols)

        matrix.data = A.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })

        return matrix
    }

    map(func) {
        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })
        return this
    }

    static transpose(A) {
        var matrix = new Matrix(A.cols, A.rows)
        matrix.map((num, i, j) => {
            return A.data[j][i]
        })
        return matrix
    }

    // Operações estáticas Matriz x Escalar

    static escalar_multiply(A, escalar) { //static para chamar Matrix.add(X,Y)
        let matrix = new Matrix(A.rows, A.cols)

        matrix.map((elem, i, j) => {
            return A.data[i][j] * escalar;
        })

        return matrix
    }

    // Operações estáticas Matriz x Matriz

    static hadamard(A, B) { //static para chamar Matrix.add(X,Y)
        let matrix = new Matrix(A.rows, A.cols)

        matrix.map((elem, i, j) => {
            return A.data[i][j] * B.data[i][j];
        })

        return matrix
    }

    static add(A, B) { //static para chamar Matrix.add(X,Y)
        let matrix = new Matrix(A.rows, A.cols)

        matrix.map((elem, i, j) => {
            return A.data[i][j] + B.data[i][j];
        })

        return matrix
    }

    static sub(A, B) { //static para chamar Matrix.add(X,Y)
        let matrix = new Matrix(A.rows, A.cols)

        matrix.map((elem, i, j) => {
            return A.data[i][j] - B.data[i][j];
        })

        return matrix
    }

    static multiply(A, B) {
        let matrix = new Matrix(A.rows, B.cols)

        matrix.map((elem, i, j) => {
            let sum = 0

            for (let k = 0; k < A.cols; k++) {
                let num1 = A.data[i][k]
                let num2 = B.data[k][j]

                sum += num1 * num2
            }

            return sum
        })

        return matrix
    }
}
