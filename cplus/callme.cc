#include "callme.h"

void callme( void(*callback)(void) )
{
  callback();
}