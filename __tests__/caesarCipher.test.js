'use strict';
import CaesarCipher from '../scripts/CaesarCipher';

describe('Caesar Cipher Encryption', () => {
  test('input all lower case offset 1', () => {
    expect(CaesarCipher.encrypt('attack', 1)).toBe('buubdl');
  });

  test('input all lower case offset 15', () => {
    expect(CaesarCipher.encrypt('defend', 15)).toBe('stutcs');
  });

  test('input all lower case offset 25', () => {
    expect(CaesarCipher.encrypt('danger', 25)).toBe('czmfdq');
  });

  test('input all upper case offset 9', () => {
    expect(CaesarCipher.encrypt('ADVANCE', 9)).toBe('JMEJWLN');
  });

  test('input all upper case offset 18', () => {
    expect(CaesarCipher.encrypt('HOLD', 18)).toBe('ZGDV');
  });

  test('input all upper case offset 23', () => {
    expect(CaesarCipher.encrypt('FORWARD', 23)).toBe('CLOTXOA');
  });

  test('input mixed case offset 3', () => {
    expect(CaesarCipher.encrypt('ArCheRs', 3)).toBe('DuFkhUv');
  });

  test('input mixed case offset 11', () => {
    expect(CaesarCipher.encrypt('infANTRY', 11)).toBe('tyqLYECJ');
  });

  test('input mixed case offset 21', () => {
    expect(CaesarCipher.encrypt('CavalrY', 21)).toBe('XvqvgmT');
  });

  test('input multi word offset 6', () => {
    expect(CaesarCipher.encrypt('attack at down', 6)).toBe('gzzgiq gz juct');
  });

  test('input multi word offset 13', () => {
    expect(CaesarCipher.encrypt('hold POSITION here', 13)).toBe(
      'ubyq CBFVGVBA urer'
    );
  });

  test('input multi word offset 19', () => {
    expect(CaesarCipher.encrypt('WE NeeD MorE ArcherS ON ThE WalL', 19)).toBe(
      'PX GxxW FhkX TkvaxkL HG MaX PteE'
    );
  });

  test('input sentence with punctuation offset 4', () => {
    expect(CaesarCipher.encrypt('Left flank is open, attack!', 4)).toBe(
      'Pijx jpero mw stir, exxego!'
    );
  });

  test('input sentence with punctuation offset 17', () => {
    expect(
      CaesarCipher.encrypt('Wait? For what? I ready, we will go now!', 17)
    ).toBe('Nrzk? Wfi nyrk? Z ivrup, nv nzcc xf efn!');
  });

  test('input sentence with punctuation offset 24', () => {
    expect(CaesarCipher.encrypt('|A-T-T-A-C-K*N-O-W|', 24)).toBe(
      '|Y-R-R-Y-A-I*L-M-U|'
    );
  });

  test('input offset > 25, offset 29', () => {
    expect(CaesarCipher.encrypt('And so it begins!', 29)).toBe(
      'Dqg vr lw ehjlqv!'
    );
  });

  test('input offset > 25, offset 35', () => {
    expect(CaesarCipher.encrypt('Nock! Aim! Release!', 35)).toBe(
      'Wxlt! Jrv! Anunjbn!'
    );
  });

  test('input offset > 25, offset 128', () => {
    expect(CaesarCipher.encrypt('There is TROLL in the dungeon!', 128)).toBe(
      'Rfcpc gq RPMJJ gl rfc bslecml!'
    );
  });

  test('input offset < 0, offset -15', () => {
    expect(CaesarCipher.encrypt('This is SPARTA!!!', -15)).toBe(
      'Estd td DALCEL!!!'
    );
  });

  test('input offset < 0, offset -49', () => {
    expect(
      CaesarCipher.encrypt('-Orcs-Are-In-The-Cave-Under-The-Waterfall-', -49)
    ).toBe('-Rufv-Duh-Lq-Wkh-Fdyh-Xqghu-Wkh-Zdwhuidoo-');
  });

  test('input offset < 0, offset -251', () => {
    expect(CaesarCipher.encrypt('<PURGE THEM ALL>', -251)).toBe(
      '<YDAPN CQNV JUU>'
    );
  });

  test('no offset', () => {
    expect(CaesarCipher.encrypt('dummy', 0)).toBe('dummy');
  });
});

describe('Caesar Cipher Decrypt', () => {
  test('input all lower case offset 1', () => {
    expect(CaesarCipher.decrypt('buubdl', 1)).toBe('attack');
  });

  test('input all lower case offset 15', () => {
    expect(CaesarCipher.decrypt('stutcs', 15)).toBe('defend');
  });

  test('input all lower case offset 25', () => {
    expect(CaesarCipher.decrypt('czmfdq', 25)).toBe('danger');
  });

  test('input all upper case offset 9', () => {
    expect(CaesarCipher.decrypt('JMEJWLN', 9)).toBe('ADVANCE');
  });

  test('input all upper case offset 18', () => {
    expect(CaesarCipher.decrypt('ZGDV', 18)).toBe('HOLD');
  });

  test('input all upper case offset 23', () => {
    expect(CaesarCipher.decrypt('CLOTXOA', 23)).toBe('FORWARD');
  });

  test('input mixed case offset 3', () => {
    expect(CaesarCipher.decrypt('DuFkhUv', 3)).toBe('ArCheRs');
  });

  test('input mixed case offset 11', () => {
    expect(CaesarCipher.decrypt('tyqLYECJ', 11)).toBe('infANTRY');
  });

  test('input mixed case offset 21', () => {
    expect(CaesarCipher.decrypt('XvqvgmT', 21)).toBe('CavalrY');
  });

  test('input multi word offset 6', () => {
    expect(CaesarCipher.decrypt('gzzgiq gz juct', 6)).toBe('attack at down');
  });

  test('input multi word offset 13', () => {
    expect(CaesarCipher.decrypt('ubyq CBFVGVBA urer', 13)).toBe(
      'hold POSITION here'
    );
  });

  test('input multi word offset 19', () => {
    expect(CaesarCipher.decrypt('PX GxxW FhkX TkvaxkL HG MaX PteE', 19)).toBe(
      'WE NeeD MorE ArcherS ON ThE WalL'
    );
  });

  test('input sentence with punctuation offset 4', () => {
    expect(CaesarCipher.decrypt('Pijx jpero mw stir, exxego!', 4)).toBe(
      'Left flank is open, attack!'
    );
  });

  test('input sentence with punctuation offset 17', () => {
    expect(
      CaesarCipher.decrypt('Nrzk? Wfi nyrk? Z ivrup, nv nzcc xf efn!', 17)
    ).toBe('Wait? For what? I ready, we will go now!');
  });

  test('input sentence with punctuation offset 24', () => {
    expect(CaesarCipher.decrypt('|Y-R-R-Y-A-I*L-M-U|', 24)).toBe(
      '|A-T-T-A-C-K*N-O-W|'
    );
  });

  test('input offset > 25, offset 29', () => {
    expect(CaesarCipher.decrypt('Dqg vr lw ehjlqv!', 29)).toBe(
      'And so it begins!'
    );
  });

  test('input offset > 25, offset 35', () => {
    expect(CaesarCipher.decrypt('Wxlt! Jrv! Anunjbn!', 35)).toBe(
      'Nock! Aim! Release!'
    );
  });

  test('input offset > 25, offset 128', () => {
    expect(CaesarCipher.decrypt('Rfcpc gq RPMJJ gl rfc bslecml!', 128)).toBe(
      'There is TROLL in the dungeon!'
    );
  });

  test('input offset < 0, offset -15', () => {
    expect(CaesarCipher.decrypt('Estd td DALCEL!!!', -15)).toBe(
      'This is SPARTA!!!'
    );
  });

  test('input offset < 0, offset -49', () => {
    expect(
      CaesarCipher.decrypt('-Rufv-Duh-Lq-Wkh-Fdyh-Xqghu-Wkh-Zdwhuidoo-', -49)
    ).toBe('-Orcs-Are-In-The-Cave-Under-The-Waterfall-');
  });
  
  test('input offset < 0, offset -251', () => {
    expect(CaesarCipher.decrypt('<YDAPN CQNV JUU>', -251)).toBe(
      '<PURGE THEM ALL>'
    );
  });

  test('no offset', () => {
    expect(CaesarCipher.decrypt('dummy', 0)).toBe('dummy');
  });
});

describe('encrypt <-> decrypt', () => {
  test('encrypt then decrypt', () => {
    expect(CaesarCipher.decrypt(CaesarCipher.encrypt('attack', 5), 5)).toBe(
      'attack'
    );
  });
});
