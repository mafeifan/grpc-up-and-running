# Pull base ubuntu image.
FROM public.ecr.aws/amazoncorretto/amazoncorretto:11

# Copy the build files to the container.
ADD ./build/libs/server.jar server.jar
# Document that the service listens on port 50051.
EXPOSE 50051
# Run the server command when the container starts.
CMD java -jar server.jar