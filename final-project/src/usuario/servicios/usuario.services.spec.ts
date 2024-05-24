import { Test, TestingModule } from '@nestjs/testing';
import { usuarioService } from './usuario.services';

describe('UsuarioServicesTsService', () => {
  let service: usuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [usuarioService],
    }).compile();

    service = module.get<usuarioService>(usuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
