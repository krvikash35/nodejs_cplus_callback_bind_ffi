#ifdef __linux__ 
  extern "C" void callme( void(*callback)(void) );
#elif _WIN32
  extern "C" __declspec(dllexport) void callme( void(*callback)(void) );
#elif __APPLE__
  extern "C" void callme( void(*callback)(void) );
#endif