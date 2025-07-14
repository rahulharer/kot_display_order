pipeline {
    agent any

    environment {
        IMAGE_NAME = 'KOD-node-app'
        CONTAINER_NAME = 'KOD-node-app'
        NODE_PORT = '3000'
        NGINX_PORT = '9020'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/rahulharer/kot_display_order', branch: 'main'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t KOD-node-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker rm -f KOD-node-app || true'
                sh 'docker run -d -p 9020:9020 --name KOD-node-app KOD-node-app'
            }
        }
    }
}
