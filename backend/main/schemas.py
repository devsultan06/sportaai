from drf_spectacular.utils import extend_schema, OpenApiParameter

AthleteSchema = extend_schema(
        summary="Hello World", 
        description="Returns a simple hello world response."
    )