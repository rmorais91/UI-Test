import { TestBed, async, inject } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsersService', () => {
  let userService: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });

    userService = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });


  it('should fetch users List as an Observable', async(inject([HttpTestingController, UsersService],
    (httpClient: HttpTestingController, usersService: UsersService) => {

      const userList = [
        {
          name: 'Ras Berry'
        },
        {
          name: 'John Doe'
        },
        {
          name: 'Gareth Aldridge'
        },
        {
          name: 'Hallen Pipper'
        },
        {
          name: 'Joe Allen'
        },
        {
          name: 'Dolly Johnson'
        }
      ];


      usersService.getUsers()
        .subscribe((usersList: any) => {
          expect(usersList.length).toBe(6);
        });

      const req = httpMock.expectOne('https://uitest.free.beeceptor.com/usernames');
      expect(req.request.method).toBe('GET');

      req.flush(userList);
      httpMock.verify();

    })));

});



