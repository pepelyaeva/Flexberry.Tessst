docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tessst/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tessst/app ../..
